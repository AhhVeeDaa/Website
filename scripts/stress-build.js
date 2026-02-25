#!/usr/bin/env node

/**
 * Build Stress Test
 * Tests the build process under various conditions
 */

const { execSync, spawn } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('\n🏗️  Build Stress Test Suite\n')

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

async function runBuildTest() {
  console.log('Test 1: Standard Build Process')
  console.log('─'.repeat(50))

  try {
    const startTime = performance.now()
    console.log('🔨 Building project...')

    execSync('npm run build', {
      stdio: 'inherit',
      cwd: path.join(__dirname, '..'),
    })

    const endTime = performance.now()
    const buildTime = endTime - startTime

    console.log(`✓ Build completed in ${(buildTime / 1000).toFixed(2)}s`)

    // Analyze .next directory
    const nextDir = path.join(__dirname, '../.next')
    if (fs.existsSync(nextDir)) {
      let totalSize = 0
      let fileCount = 0

      function analyzeDir(dir) {
        const files = fs.readdirSync(dir, { recursive: true })
        files.forEach((file) => {
          const filePath = path.join(dir, file)
          const stats = fs.statSync(filePath)
          if (stats.isFile()) {
            totalSize += stats.size
            fileCount++
          }
        })
      }

      analyzeDir(nextDir)
      console.log(`✓ Generated ${fileCount} files`)
      console.log(`✓ Build output size: ${formatBytes(totalSize)}`)
    }
  } catch (error) {
    console.log(`✗ Build failed: ${error.message}`)
    process.exit(1)
  }

  console.log('\n' + '='.repeat(60))
  console.log('Build Stress Test Summary')
  console.log('='.repeat(60))
  console.log('✓ Standard build test passed!\n')
}

runBuildTest().catch((error) => {
  console.error('Build test error:', error)
  process.exit(1)
})
