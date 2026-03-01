'use client';

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full flex justify-between items-center px-8 py-6 z-50 bg-black/80 backdrop-blur-md border-b border-gray-900/50">
      <Link href="/" className="text-lg font-bold tracking-tight hover:text-purple-400 transition-colors duration-300">
        AhhVeeDaa
      </Link>
      <div className="flex gap-8 text-sm">
        <Link href="/about" className="text-gray-400 hover:text-gray-200 transition-colors duration-300">About</Link>
        <Link href="/work" className="text-gray-400 hover:text-gray-200 transition-colors duration-300">Work</Link>
        <Link href="/shop" className="text-gray-400 hover:text-gray-200 transition-colors duration-300">Shop</Link>
        <Link href="/inventions" className="text-gray-400 hover:text-gray-200 transition-colors duration-300">Inventions</Link>
        <Link href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Contact</Link>
      </div>
    </nav>
  );
}