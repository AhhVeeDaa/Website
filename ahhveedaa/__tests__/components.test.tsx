import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Component Stress Tests', () => {
  // Test component rendering performance with many props
  test('renders with complex prop structure 1000 times', () => {
    const iterations = 1000
    const startTime = performance.now()

    for (let i = 0; i < iterations; i++) {
      const { container } = render(
        <div className="flex min-h-screen items-center justify-center">
          <main className="flex flex-col items-center gap-6">
            <h1 className="text-3xl font-semibold">Test {i}</h1>
            <p className="text-lg leading-8">Component iteration {i}</p>
          </main>
        </div>
      )
      container.remove()
    }

    const endTime = performance.now()
    const duration = endTime - startTime
    console.log(`\n✓ Rendered 1000 components in ${duration.toFixed(2)}ms`)
    console.log(`  Average: ${(duration / iterations).toFixed(3)}ms per render`)
  })

  // Test memory efficiency with dynamic content
  test('handles large dynamic content arrays', () => {
    const largeArray = Array.from({ length: 10000 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
      description: `This is item number ${i} with some content`,
    }))

    const startTime = performance.now()

    const { container } = render(
      <div>
        {largeArray.map((item) => (
          <div key={item.id} className="p-4 border-b">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    )

    const endTime = performance.now()
    const duration = endTime - startTime
    console.log(`\n✓ Rendered 10,000 items in ${duration.toFixed(2)}ms`)

    container.remove()
  })

  // Test rapid re-renders
  test('handles rapid state updates', async () => {
    const iterations = 100
    const startTime = performance.now()

    for (let i = 0; i < iterations; i++) {
      const { unmount } = render(
        <div className="text-2xl font-bold">
          State: {i} {i % 2 === 0 ? '✓' : '⨯'}
        </div>
      )
      unmount()
    }

    const endTime = performance.now()
    const duration = endTime - startTime
    console.log(`\n✓ Completed 100 mount/unmount cycles in ${duration.toFixed(2)}ms`)
    console.log(`  Average: ${(duration / iterations).toFixed(3)}ms per cycle`)
  })

  // Test className stress
  test('handles complex Tailwind class names', () => {
    const complexClasses =
      'flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black sm:items-start md:justify-between lg:gap-8 xl:px-32 2xl:max-w-7xl hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-300 ease-in-out'

    const { container } = render(
      <div className={complexClasses}>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Complex Tailwind Test
        </p>
      </div>
    )

    expect(container.firstChild).toHaveClass('flex')
    expect(container.firstChild).toHaveClass('dark:bg-black')
    expect(container.firstChild).toHaveClass('transition-colors')

    container.remove()
  })
})
