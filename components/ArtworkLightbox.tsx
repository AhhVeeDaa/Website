'use client'

import Image from 'next/image'
import { useEffect, useId, useRef, useState } from 'react'

type ArtworkLightboxProps = {
  src: string
  alt: string
  title: string
  previewOnly?: boolean
}

export default function ArtworkLightbox({ src, alt, title, previewOnly = false }: ArtworkLightboxProps) {
  const [open, setOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) {
      dialog.showModal()
      closeRef.current?.focus()
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label={`Preview ${title}`}
        className={previewOnly
          ? 'inline-flex min-h-11 items-center rounded-full border border-white/15 px-4 text-sm text-white/75 transition-colors hover:border-violet-300/50 hover:bg-violet-300/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300'
          : 'group relative block w-full overflow-hidden rounded-xl border border-white/10 bg-black/30 text-left transition-colors hover:border-violet-300/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300'}
      >
        {previewOnly ? (
          <>Preview <span aria-hidden="true" className="ml-2">↗</span></>
        ) : (
          <span className="relative block aspect-[4/3] w-full">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 36rem"
              className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-10 text-sm text-white">
              <span>{title}</span>
              <span className="text-white/75">Preview ↗</span>
            </span>
          </span>
        )}
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        aria-modal="true"
        onClose={() => setOpen(false)}
        onCancel={(event) => {
          event.preventDefault()
          setOpen(false)
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false)
        }}
        className="m-auto flex h-[min(82dvh,52rem)] w-[min(92vw,68rem)] max-h-[92dvh] max-w-[92vw] flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#090a0f] p-3 text-white shadow-2xl backdrop:bg-black/85"
      >
        <div className="flex shrink-0 items-center justify-between gap-4 px-2 pb-3">
          <h2 id={titleId} className="text-sm font-medium">{title}</h2>
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close artwork preview"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-2xl text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="relative min-h-0 flex-1">
          <Image src={src} alt={alt} fill sizes="92vw" className="rounded-lg object-contain" />
        </div>
      </dialog>
    </>
  )
}
