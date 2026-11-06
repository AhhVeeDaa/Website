'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { KeyboardEvent, PointerEvent, WheelEvent } from 'react'

type ModelState = 'idle' | 'loading' | 'ready' | 'error'

const vertexShaderSource = `
attribute vec3 aPosition;
attribute vec3 aColor;
attribute float aOpacity;
attribute float aSize;
uniform mat4 uView;
uniform mat4 uProjection;
uniform float uViewportHeight;
varying vec3 vColor;
varying float vOpacity;
void main() {
  vec4 viewPosition = uView * vec4(aPosition, 1.0);
  gl_Position = uProjection * viewPosition;
  gl_PointSize = clamp(aSize * uViewportHeight / max(-viewPosition.z, 0.1), 1.0, 24.0);
  vColor = aColor;
  vOpacity = aOpacity;
}`

const fragmentShaderSource = `
precision mediump float;
varying vec3 vColor;
varying float vOpacity;
void main() {
  vec2 point = gl_PointCoord - vec2(0.5);
  float radius = length(point) * 2.0;
  if (radius > 1.0) discard;
  float alpha = exp(-radius * radius * 4.0) * vOpacity;
  gl_FragColor = vec4(vColor, alpha);
}`

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) throw new Error('Unable to create WebGL shader.')
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader) || 'Unable to compile WebGL shader.'
    gl.deleteShader(shader)
    throw new Error(message)
  }
  return shader
}

function createProgram(gl: WebGLRenderingContext) {
  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
  const program = gl.createProgram()
  if (!program) throw new Error('Unable to create WebGL program.')
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  gl.deleteShader(vertexShader)
  gl.deleteShader(fragmentShader)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const message = gl.getProgramInfoLog(program) || 'Unable to link WebGL program.'
    gl.deleteProgram(program)
    throw new Error(message)
  }
  return program
}

function findHeader(buffer: ArrayBuffer) {
  const prefix = new TextDecoder().decode(new Uint8Array(buffer, 0, Math.min(buffer.byteLength, 4096)))
  const marker = prefix.indexOf('end_header')
  if (marker === -1) throw new Error('The PLY header is missing or too large.')
  const header = prefix.slice(0, marker + 'end_header'.length)
  const dataOffset = marker + 'end_header'.length + (prefix[marker + 'end_header'.length] === '\r' ? 2 : 1)
  const vertexCount = Number(header.match(/^element vertex (\d+)$/m)?.[1])
  const properties = [...header.matchAll(/^property (?:float|float32) ([\w]+)$/gm)].map((match) => match[1])
  if (!header.includes('format binary_little_endian 1.0') || !vertexCount || properties.length === 0) {
    throw new Error('This viewer supports binary little-endian PLY point clouds.')
  }
  return { dataOffset, vertexCount, properties }
}

function getLookAt(eye: [number, number, number]) {
  const normalize = (v: [number, number, number]): [number, number, number] => {
    const length = Math.hypot(...v) || 1
    return [v[0] / length, v[1] / length, v[2] / length]
  }
  const cross = (a: [number, number, number], b: [number, number, number]): [number, number, number] => [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ]
  const dot = (a: [number, number, number], b: [number, number, number]) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
  const z = normalize(eye)
  const x = normalize(cross([0, 1, 0], z))
  const y = cross(z, x)
  return new Float32Array([
    x[0], y[0], z[0], 0,
    x[1], y[1], z[1], 0,
    x[2], y[2], z[2], 0,
    -dot(x, eye), -dot(y, eye), -dot(z, eye), 1,
  ])
}

function getProjection(aspect: number) {
  const near = 0.1
  const far = 100
  const f = 1 / Math.tan(Math.PI / 8)
  return new Float32Array([
    f / aspect, 0, 0, 0,
    0, f, 0, 0,
    0, 0, (far + near) / (near - far), -1,
    0, 0, (2 * far * near) / (near - far), 0,
  ])
}

function createAttributeBuffer(gl: WebGLRenderingContext, program: WebGLProgram, name: string, values: Float32Array, size: number) {
  const buffer = gl.createBuffer()
  if (!buffer) throw new Error(`Unable to create ${name} buffer.`)
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, values, gl.STATIC_DRAW)
  const location = gl.getAttribLocation(program, name)
  gl.enableVertexAttribArray(location)
  gl.vertexAttribPointer(location, size, gl.FLOAT, false, 0, 0)
  return buffer
}

function parsePointCloud(buffer: ArrayBuffer) {
  const { dataOffset, vertexCount, properties } = findHeader(buffer)
  const index = (name: string) => properties.indexOf(name)
  const positionIndexes = [index('x'), index('y'), index('z')]
  const colorIndexes = [index('f_dc_0'), index('f_dc_1'), index('f_dc_2')]
  const opacityIndex = index('opacity')
  if ([...positionIndexes, ...colorIndexes, opacityIndex].some((value) => value < 0)) {
    throw new Error('The PLY file is missing required point attributes.')
  }
  const stride = properties.length * Float32Array.BYTES_PER_ELEMENT
  const view = new DataView(buffer)
  if (dataOffset + vertexCount * stride > buffer.byteLength) {
    throw new Error('The PLY file ended before all vertices were read.')
  }

  const bounds = [[Infinity, -Infinity], [Infinity, -Infinity], [Infinity, -Infinity]]
  for (let point = 0; point < vertexCount; point += 1) {
    const base = dataOffset + point * stride
    for (let axis = 0; axis < 3; axis += 1) {
      const value = view.getFloat32(base + positionIndexes[axis] * 4, true)
      bounds[axis][0] = Math.min(bounds[axis][0], value)
      bounds[axis][1] = Math.max(bounds[axis][1], value)
    }
  }
  const center = bounds.map(([min, max]) => (min + max) / 2)
  let radius = 0
  for (let axis = 0; axis < 3; axis += 1) radius = Math.max(radius, (bounds[axis][1] - bounds[axis][0]) / 2)
  if (!Number.isFinite(radius) || radius === 0) throw new Error('The PLY file contains no usable point positions.')

  const positions = new Float32Array(vertexCount * 3)
  const colors = new Float32Array(vertexCount * 3)
  const opacities = new Float32Array(vertexCount)
  const sizes = new Float32Array(vertexCount)
  const scaleIndexes = [index('scale_0'), index('scale_1'), index('scale_2')]
  const shConstant = 0.2820947918
  for (let point = 0; point < vertexCount; point += 1) {
    const base = dataOffset + point * stride
    for (let axis = 0; axis < 3; axis += 1) {
      positions[point * 3 + axis] =
        (view.getFloat32(base + positionIndexes[axis] * 4, true) - center[axis]) / radius
      colors[point * 3 + axis] = Math.min(
        1,
        Math.max(0, 0.5 + shConstant * view.getFloat32(base + colorIndexes[axis] * 4, true)),
      )
    }
    const opacity = view.getFloat32(base + opacityIndex * 4, true)
    opacities[point] = 1 / (1 + Math.exp(-opacity))
    const scale = scaleIndexes.reduce((largest, fieldIndex) => {
      if (fieldIndex < 0) return largest
      return Math.max(largest, view.getFloat32(base + fieldIndex * 4, true))
    }, -100)
    sizes[point] = scale > -100 ? Math.exp(scale) / radius : 0.004
  }
  return { positions, colors, opacities, sizes, vertexCount }
}

export default function WitnessOneModel() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const controlsRef = useRef({ yaw: 0.55, pitch: 0.2, distance: 3.2 })
  const [loadAttempt, setLoadAttempt] = useState(0)
  const [state, setState] = useState<ModelState>('idle')
  const [message, setMessage] = useState('')
  const [vertexCount, setVertexCount] = useState(0)

  const adjustView = useCallback((action: 'left' | 'right' | 'up' | 'down' | 'zoom-in' | 'zoom-out' | 'reset') => {
    const controls = controlsRef.current
    if (action === 'reset') {
      controls.yaw = 0.55
      controls.pitch = 0.2
      controls.distance = 3.2
    } else if (action === 'left') controls.yaw -= 0.15
    else if (action === 'right') controls.yaw += 0.15
    else if (action === 'up') controls.pitch = Math.min(1.35, controls.pitch + 0.12)
    else if (action === 'down') controls.pitch = Math.max(-1.35, controls.pitch - 0.12)
    else if (action === 'zoom-in') controls.distance = Math.max(1.3, controls.distance - 0.3)
    else if (action === 'zoom-out') controls.distance = Math.min(8, controls.distance + 0.3)
  }, [])

  useEffect(() => {
    if (loadAttempt === 0) return

    let disposed = false
    let animationFrame = 0
    let observer: ResizeObserver | undefined
    let gl: WebGLRenderingContext | null = null
    let program: WebGLProgram | null = null
    let buffers: WebGLBuffer[] = []
    let canvas: HTMLCanvasElement | null = null
    let cleanupResources = () => {}
    const handleContextLost = (event: Event) => {
      event.preventDefault()
      cleanupResources()
      setMessage('The browser lost the WebGL context.')
      setState('error')
    }
    cleanupResources = () => {
      if (disposed) return
      disposed = true
      window.cancelAnimationFrame(animationFrame)
      observer?.disconnect()
      canvas?.removeEventListener('webglcontextlost', handleContextLost)
      if (gl) buffers.forEach((buffer) => gl?.deleteBuffer(buffer))
      if (gl && program) gl.deleteProgram(program)
    }

    const initialize = async () => {
      try {
        const response = await fetch('/models/witness-one.ply')
        if (!response.ok) throw new Error(`Unable to load model (${response.status}).`)
        const model = parsePointCloud(await response.arrayBuffer())
        if (disposed) return
        setVertexCount(model.vertexCount)

        canvas = canvasRef.current
        if (!canvas) throw new Error('The model viewer canvas is unavailable.')
        canvas.addEventListener('webglcontextlost', handleContextLost)
        gl = canvas.getContext('webgl', { alpha: true, antialias: true })
        if (!gl) throw new Error('WebGL is unavailable in this browser.')
        program = createProgram(gl)
        gl.useProgram(program)
        buffers = [
          createAttributeBuffer(gl, program, 'aPosition', model.positions, 3),
          createAttributeBuffer(gl, program, 'aColor', model.colors, 3),
          createAttributeBuffer(gl, program, 'aOpacity', model.opacities, 1),
          createAttributeBuffer(gl, program, 'aSize', model.sizes, 1),
        ]
        gl.enable(gl.BLEND)
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
        gl.clearColor(0.025, 0.03, 0.055, 1)

        const draw = () => {
          if (disposed || !gl || !program || !canvasRef.current) return
          const ratio = Math.min(window.devicePixelRatio || 1, 2)
          const width = Math.max(1, Math.floor(canvasRef.current.clientWidth * ratio))
          const height = Math.max(1, Math.floor(canvasRef.current.clientHeight * ratio))
          if (canvasRef.current.width !== width || canvasRef.current.height !== height) {
            canvasRef.current.width = width
            canvasRef.current.height = height
          }
          gl.viewport(0, 0, width, height)
          gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
          const { yaw, pitch, distance } = controlsRef.current
          const eye: [number, number, number] = [
            distance * Math.cos(pitch) * Math.sin(yaw),
            distance * Math.sin(pitch),
            distance * Math.cos(pitch) * Math.cos(yaw),
          ]
          gl.uniformMatrix4fv(gl.getUniformLocation(program, 'uView'), false, getLookAt(eye))
          gl.uniformMatrix4fv(gl.getUniformLocation(program, 'uProjection'), false, getProjection(width / height))
          gl.uniform1f(gl.getUniformLocation(program, 'uViewportHeight'), height)
          gl.drawArrays(gl.POINTS, 0, model.vertexCount)
          animationFrame = window.requestAnimationFrame(draw)
        }

        observer = new ResizeObserver(draw)
        observer.observe(canvas)
        draw()
        if (!disposed) setState('ready')
      } catch (error) {
        if (disposed) return
        cleanupResources()
        setMessage(error instanceof Error ? error.message : 'The model could not be displayed.')
        setState('error')
      }
    }

    void initialize()
    return cleanupResources
  }, [loadAttempt])

  const handleKeyDown = (event: KeyboardEvent<HTMLCanvasElement>) => {
    const keyActions: Record<string, Parameters<typeof adjustView>[0]> = {
      ArrowLeft: 'left',
      ArrowRight: 'right',
      ArrowUp: 'up',
      ArrowDown: 'down',
      '+': 'zoom-in',
      '=': 'zoom-in',
      '-': 'zoom-out',
      Home: 'reset',
    }
    const action = keyActions[event.key]
    if (action) {
      event.preventDefault()
      adjustView(action)
    }
  }

  const handlePointerDown = (event: PointerEvent<HTMLCanvasElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    event.currentTarget.dataset.dragX = String(event.clientX)
    event.currentTarget.dataset.dragY = String(event.clientY)
  }

  const handlePointerMove = (event: PointerEvent<HTMLCanvasElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return
    const previousX = Number(event.currentTarget.dataset.dragX)
    const previousY = Number(event.currentTarget.dataset.dragY)
    const dx = event.clientX - previousX
    const dy = event.clientY - previousY
    event.currentTarget.dataset.dragX = String(event.clientX)
    event.currentTarget.dataset.dragY = String(event.clientY)
    controlsRef.current.yaw += dx * 0.008
    controlsRef.current.pitch = Math.max(-1.35, Math.min(1.35, controlsRef.current.pitch + dy * 0.008))
  }

  const handleWheel = (event: WheelEvent<HTMLCanvasElement>) => {
    event.preventDefault()
    controlsRef.current.distance = Math.max(1.3, Math.min(8, controlsRef.current.distance + event.deltaY * 0.003))
  }

  return (
    <section aria-labelledby="witness-one-model-title" className="glass-panel overflow-hidden rounded-2xl">
      <div className="flex flex-wrap items-start justify-between gap-4 p-6 sm:p-7">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="eyebrow text-violet-200">Witness One · Physical AI companion</p>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">Concept in development</span>
          </div>
          <h3 id="witness-one-model-title" className="mt-3 text-xl font-medium">Interactive point-cloud preview</h3>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
            Drag or use arrow keys to orbit. Use the controls or scroll to zoom. The model loads only when requested.
          </p>
        </div>
        <a
          href="/models/witness-one.ply"
          download="witness-one.ply"
          className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition-colors hover:border-violet-300/40 hover:text-white"
        >
          Download PLY
        </a>
      </div>
      {state === 'idle' && (
        <div className="border-t border-white/10 p-6 sm:px-7">
          <button
            type="button"
            onClick={() => {
              setState('loading')
              setLoadAttempt((attempt) => attempt + 1)
            }}
            className="min-h-12 rounded-full bg-white px-5 text-sm font-medium text-black transition-colors hover:bg-violet-200"
          >
            Load interactive model
          </button>
          <p className="mt-3 text-xs text-white/40">The original model is approximately 17 MB.</p>
        </div>
      )}
      {state === 'loading' && <p role="status" className="border-t border-white/10 p-6 text-sm text-white/65">Loading and preparing the model…</p>}
      {state === 'error' && (
        <div role="status" className="border-t border-white/10 p-6">
          <p className="text-sm text-amber-100">Interactive preview unavailable: {message}</p>
          <p className="mt-2 text-sm text-white/55">Download the PLY file to view it with a compatible 3D point-cloud tool.</p>
          <button type="button" onClick={() => { setMessage(''); setState('loading'); setLoadAttempt((attempt) => attempt + 1) }} className="mt-4 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 hover:text-white">Try again</button>
        </div>
      )}
      {(state === 'loading' || state === 'ready') && (
        <div className="border-t border-white/10">
          <canvas
            ref={canvasRef}
            role="img"
            aria-label="Interactive 3D point-cloud rendering of the Witness One concept. Use arrow keys to rotate, plus and minus to zoom, and Home to reset."
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onWheel={handleWheel}
            className="block h-[min(64vw,30rem)] min-h-64 w-full touch-none outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-300"
          />
          {state === 'ready' && (
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-4 py-3 sm:px-6">
              <p className="text-xs text-white/45">{vertexCount.toLocaleString()} points · drag, touch, scroll, or keyboard</p>
              <div className="flex flex-wrap gap-2">
                <button type="button" onClick={() => adjustView('zoom-out')} aria-label="Zoom out" className="h-10 min-w-10 rounded-full border border-white/15 px-3 text-sm text-white/75 hover:bg-white/10">−</button>
                <button type="button" onClick={() => adjustView('zoom-in')} aria-label="Zoom in" className="h-10 min-w-10 rounded-full border border-white/15 px-3 text-sm text-white/75 hover:bg-white/10">+</button>
                <button type="button" onClick={() => adjustView('reset')} className="min-h-10 rounded-full border border-white/15 px-4 text-sm text-white/75 hover:bg-white/10">Reset view</button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
