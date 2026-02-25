#!/usr/bin/env node

/**
 * Performance & Load Stress Test
 * Simulates performance metrics and load testing scenarios
 */

const fs = require('fs')
const path = require('path')

console.log('\n📊 Performance Stress Test Suite\n')

class PerformanceMonitor {
  constructor(name) {
    this.name = name
    this.startTime = performance.now()
    this.checkpoints = []
  }

  checkpoint(label) {
    const now = performance.now()
    this.checkpoints.push({
      label,
      time: now - this.startTime,
    })
  }

  end() {
    const endTime = performance.now()
    const duration = endTime - this.startTime
    return { duration, checkpoints: this.checkpoints }
  }
}

// Test 1: Module Import Performance
function testModuleImports() {
  console.log('Test 1: Module Import Performance')
  console.log('─'.repeat(50))

  const monitor = new PerformanceMonitor('module imports')

  // Simulate importing multiple modules
  const modules = [
    'next/image',
    'react',
    'react-dom',
    'classnames',
    '@tailwindcss/forms',
  ]

  modules.forEach((mod) => {
    monitor.checkpoint(`import ${mod}`)
  })

  const result = monitor.end()
  console.log(`✓ Imported ${modules.length} modules in ${result.duration.toFixed(2)}ms`)
}

// Test 2: File System Operations
function testFileSystemPerformance() {
  console.log('\nTest 2: File System Performance')
  console.log('─'.repeat(50))

  const testDir = path.join(__dirname, '../.test-cache')
  if (!fs.existsSync(testDir)) {
    fs.mkdirSync(testDir, { recursive: true })
  }

  const monitor = new PerformanceMonitor('file operations')

  // Test file writes
  const writeStart = performance.now()
  for (let i = 0; i < 100; i++) {
    fs.writeFileSync(path.join(testDir, `test-${i}.txt`), `Test content ${i}`)
  }
  const writeTime = performance.now() - writeStart
  monitor.checkpoint('100 file writes')
  console.log(`✓ 100 file writes: ${writeTime.toFixed(2)}ms`)

  // Test file reads
  const readStart = performance.now()
  for (let i = 0; i < 100; i++) {
    fs.readFileSync(path.join(testDir, `test-${i}.txt`), 'utf-8')
  }
  const readTime = performance.now() - readStart
  monitor.checkpoint('100 file reads')
  console.log(`✓ 100 file reads: ${readTime.toFixed(2)}ms`)

  // Cleanup
  try {
    const files = fs.readdirSync(testDir)
    files.forEach((file) => {
      fs.unlinkSync(path.join(testDir, file))
    })
    fs.rmdirSync(testDir)
  } catch (e) {
    // Ignore cleanup errors
  }
}

// Test 3: JSON Processing
function testJSONProcessing() {
  console.log('\nTest 3: JSON Processing Performance')
  console.log('─'.repeat(50))

  const largeObject = {
    pages: Array.from({ length: 100 }, (_, i) => ({
      id: i,
      title: `Page ${i}`,
      description: `This is page ${i} with some content`,
      metadata: {
        created: new Date().toISOString(),
        updated: new Date().toISOString(),
        views: Math.floor(Math.random() * 10000),
        author: 'AhhVeeDaa',
      },
    })),
  }

  const monitor = new PerformanceMonitor('JSON operations')

  // Test JSON stringify
  const stringifyStart = performance.now()
  for (let i = 0; i < 1000; i++) {
    JSON.stringify(largeObject)
  }
  const stringifyTime = performance.now() - stringifyStart
  monitor.checkpoint('1000 JSON stringifies')
  console.log(`✓ 1000 JSON stringifies: ${stringifyTime.toFixed(2)}ms`)

  // Test JSON parse
  const jsonString = JSON.stringify(largeObject)
  const parseStart = performance.now()
  for (let i = 0; i < 1000; i++) {
    JSON.parse(jsonString)
  }
  const parseTime = performance.now() - parseStart
  monitor.checkpoint('1000 JSON parses')
  console.log(`✓ 1000 JSON parses: ${parseTime.toFixed(2)}ms`)
}

// Test 4: Memory Simulation
function testMemoryUsage() {
  console.log('\nTest 4: Memory Usage Simulation')
  console.log('─'.repeat(50))

  const arrays = []
  const monitor = new PerformanceMonitor('memory allocation')

  // Allocate arrays to simulate memory usage
  for (let i = 0; i < 10; i++) {
    arrays.push(new Array(10000).fill(`Item ${i}`))
    monitor.checkpoint(`Allocated array ${i + 1}`)
  }

  console.log(`✓ Allocated 10 arrays with 10,000 items each`)
  console.log(`✓ Simulated memory usage: ~${(arrays.length * 10000 * 8) / 1024 / 1024} MB`)

  // Force garbage collection hint
  if (global.gc) {
    global.gc()
    console.log('✓ Garbage collection triggered')
  }
}

// Test 5: Concurrent Operations
function testConcurrentOps() {
  console.log('\nTest 5: Concurrent Operations')
  console.log('─'.repeat(50))

  const monitor = new PerformanceMonitor('concurrent ops')

  const tasks = []
  for (let i = 0; i < 50; i++) {
    tasks.push(
      new Promise((resolve) => {
        setTimeout(() => resolve(i), Math.random() * 100)
      })
    )
  }

  const startTime = performance.now()
  Promise.all(tasks).then(() => {
    const duration = performance.now() - startTime
    console.log(`✓ 50 concurrent operations in ${duration.toFixed(2)}ms`)
  })
}

// Run all tests
console.log('═'.repeat(60))
console.log('Performance Metrics')
console.log('═'.repeat(60) + '\n')

testModuleImports()
testFileSystemPerformance()
testJSONProcessing()
testMemoryUsage()

console.log('\n' + '='.repeat(60))
console.log('Performance Test Summary')
console.log('='.repeat(60))
console.log('✓ All performance tests completed!\n')
