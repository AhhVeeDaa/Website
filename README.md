# Website
Website
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'AhhVeeDaa — Creative Technologist',
  description:
    'Creative Technologist & Media Architect building culture, systems, and signal across media, music, authorship and advanced technology.',
  openGraph: {
    title: 'AhhVeeDaa',
    description:
      'Creative Technologist & Media Architect',
    url: 'https://ahhveedaa.com',
    siteName: 'AhhVeeDaa',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-[#0B0B0F] text-gray-200 antialiased;
}

h1, h2, h3 {
  @apply font-semibold tracking-tight;
}

.section {
  @apply max-w-6xl mx-auto px-6 py-24;
}

.glow {
  transition: all 0.3s ease;
}

.glow:hover {
  box-shadow: 0 0 20px rgba(59,130,246,0.35);
  border-color: rgba(59,130,246,0.5);
}
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed w-full backdrop-blur bg-black/40 z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-white text-lg">
          AVD
        </Link>
        <div className="space-x-6 text-sm text-gray-300">
          <Link href="/work" className="hover:text-white">Work</Link>
          <Link href="/inventions" className="hover:text-white">Inventions</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-10 mt-24 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} AhhVeeDaa. All rights reserved.
    </footer>
  )
}
export default function Home() {
  return (
    <main className="pt-32">

      <section className="section text-center">
        <h1 className="text-5xl md:text-7xl mb-6">
          Creative Technologist & Media Architect
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Building culture, systems, and signal across media, music, authorship and advanced technology.
        </p>
      </section>

      <section className="section grid md:grid-cols-3 gap-8">
        <div className="p-8 border border-gray-800 glow">
          <h3 className="text-xl mb-3">Media</h3>
          <p className="text-gray-400">
            Television, podcast, cultural commentary and digital presence.
          </p>
        </div>

        <div className="p-8 border border-gray-800 glow">
          <h3 className="text-xl mb-3">Music</h3>
          <p className="text-gray-400">
            Production, DJ sets and sonic architecture.
          </p>
        </div>

        <div className="p-8 border border-gray-800 glow">
          <h3 className="text-xl mb-3">Systems</h3>
          <p className="text-gray-400">
            Conceptual hardware, signal frameworks and advanced invention.
          </p>
        </div>
      </section>

      <section className="section text-center">
        <p className="text-gray-500 italic max-w-2xl mx-auto">
          “The future belongs to those who design signal, not noise.”
        </p>
      </section>

    </main>
  )
}
export default function Work() {
  return (
    <main className="pt-32">
      <section className="section">
        <h1 className="text-4xl mb-12">Work</h1>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="border border-gray-800 p-8 glow">
            <h2 className="text-2xl mb-4">Media</h2>
            <p className="text-gray-400">
              Interviews, commentary, podcast appearances and visual storytelling.
            </p>
          </div>

          <div className="border border-gray-800 p-8 glow">
            <h2 className="text-2xl mb-4">Music</h2>
            <p className="text-gray-400">
              Original productions, curated playlists and live DJ experiences.
            </p>
          </div>

          <div className="border border-gray-800 p-8 glow">
            <h2 className="text-2xl mb-4">Writing</h2>
            <p className="text-gray-400">
              Authorial works exploring culture, systems and future architecture.
            </p>
          </div>

          <div className="border border-gray-800 p-8 glow">
            <h2 className="text-2xl mb-4">Speaking</h2>
            <p className="text-gray-400">
              Talks on innovation, signal culture and multidisciplinary creation.
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}
export default function Inventions() {
  return (
    <main className="pt-32">
      <section className="section">
        <h1 className="text-4xl mb-12">Inventions</h1>

        <div className="border border-gray-800 p-10 mb-16 glow">
          <h2 className="text-2xl mb-4">AVD Chip</h2>
          <p className="text-gray-400 mb-4">
            A conceptual signal-processing architecture exploring advanced modulation,
            photonic integration and system-level optimisation.
          </p>
          <p className="text-gray-500 text-sm">
            Full architecture remains under private development.
            Technical briefs available upon strategic inquiry.
          </p>
        </div>

        <div>
          <h2 className="text-xl mb-4">Future Systems</h2>
          <p className="text-gray-500 max-w-2xl">
            Additional hardware and signal frameworks are currently in private R&D.
            Public disclosures will follow at appropriate milestones.
          </p>
        </div>

      </section>
    </main>
  )
}
export default function About() {
  return (
    <main className="pt-32">
      <section className="section">
        <h1 className="text-4xl mb-8">About</h1>

        <p className="text-gray-400 max-w-3xl leading-relaxed mb-6">
          AhhVeeDaa is a multidisciplinary creator operating at the intersection
          of media, music, authorship and technological invention.
        </p>

        <p className="text-gray-500 max-w-3xl leading-relaxed">
          His work explores culture as signal and technology as extension —
          building systems that merge creativity with advanced architecture.
        </p>
      </section>
    </main>
  )
}
export default function Contact() {
  return (
    <main className="pt-32">
      <section className="section">
        <h1 className="text-4xl mb-12">Contact</h1>

        <div className="space-y-6 text-gray-400">

          <div>
            <p className="font-semibold text-white">Media & Press</p>
            <p>press@ahhveedaa.com</p>
          </div>

          <div>
            <p className="font-semibold text-white">Brand Partnerships</p>
            <p>partnerships@ahhveedaa.com</p>
          </div>

          <div>
            <p className="font-semibold text-white">Technology & Research</p>
            <p>research@ahhveedaa.com</p>
          </div>

          <div>
            <p className="font-semibold text-white">Speaking Engagements</p>
            <p>bookings@ahhveedaa.com</p>
          </div>

        </div>
      </section>
    </main>
  )
}
npm run dev
http://localhost:3000
