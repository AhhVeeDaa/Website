'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const links = [
  { href: '/about', label: 'About', hover: 'hover:text-blue-200' },
  { href: '/work', label: 'Work', hover: 'hover:text-violet-200' },
  { href: '/inventions', label: 'Inventions', hover: 'hover:text-teal-200' },
  { href: '/ventures', label: 'Ventures', hover: 'hover:text-amber-200' },
  { href: '/shop', label: 'Shop', hover: 'hover:text-rose-200' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#090a0f]/75 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="page-shell flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3 text-sm font-semibold tracking-wide text-white">
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-black transition-colors group-hover:border-violet-300/50">
            <Image src="/images/ahhveedaa-mark.jpg" alt="" fill sizes="36px" priority className="object-contain" />
          </span>
          <span>AhhVeeDaa</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label, hover }) => (
            <Link key={href} href={href} className={`rounded-full px-4 py-2 text-sm text-white/60 transition-colors duration-300 hover:bg-white/[0.06] ${hover}`}>
              {label}
            </Link>
          ))}
          <Link href="/contact" className="ml-3 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition-colors hover:border-violet-300/50 hover:bg-violet-300/10 hover:text-purple-200">
            Contact <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" className="text-xl">{menuOpen ? '×' : '≡'}</span>
        </button>
      </nav>
      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-white/[0.07] bg-[#090a0f]/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col">
            {[...links, { href: '/contact', label: 'Contact', hover: 'hover:text-purple-200' }].map(({ href, label, hover }) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)} className={`rounded-xl px-4 py-3 text-base text-white/75 transition-colors duration-300 hover:bg-white/[0.06] ${hover}`}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
