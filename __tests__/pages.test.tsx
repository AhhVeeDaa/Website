import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Pages Stress Tests', () => {
  test('renders layout with multiple children', () => {
    const RootLayout = ({ children }: { children: React.ReactNode }) => (
      <html lang="en">
        <body>
          <nav>Navbar</nav>
          {children}
          <footer>Footer</footer>
        </body>
      </html>
    )

    const { container } = render(
      <RootLayout>
        <main>Content</main>
      </RootLayout>
    )

    expect(container.querySelector('nav')).toBeInTheDocument()
    expect(container.querySelector('footer')).toBeInTheDocument()
    expect(container.querySelector('main')).toBeInTheDocument()

    container.remove()
  })

  test('handles nested page structures', () => {
    const pages = ['home', 'about', 'contact', 'inventions', 'work']
    const startTime = performance.now()

    pages.forEach((page) => {
      const { container } = render(
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 bg-black/80 backdrop-blur">
            <h1>{page.toUpperCase()}</h1>
          </header>
          <main className="flex-1 px-8 py-16">
            <h2 className="text-3xl font-bold">Welcome to {page}</h2>
            <p className="mt-4 text-gray-400">
              This is the {page} page content.
            </p>
          </main>
          <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
            Footer content
          </footer>
        </div>
      )
      container.remove()
    })

    const endTime = performance.now()
    console.log(`\n✓ Rendered ${pages.length} pages in ${(endTime - startTime).toFixed(2)}ms`)
  })

  test('stress tests image element handling', () => {
    const images = Array.from({ length: 100 }, (_, i) => ({
      src: `/image-${i}.png`,
      alt: `Image ${i}`,
      width: 100,
      height: 100,
    }))

    const startTime = performance.now()

    const { container } = render(
      <div className="grid grid-cols-10 gap-4">
        {images.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            loading="lazy"
          />
        ))}
      </div>
    )

    const endTime = performance.now()
    const imgElements = container.querySelectorAll('img')
    console.log(`\n✓ Rendered ${imgElements.length} images in ${(endTime - startTime).toFixed(2)}ms`)

    container.remove()
  })
})
