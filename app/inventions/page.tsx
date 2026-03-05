import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inventions',
  description:
    'Early-stage concepts spanning hardware, media systems and digital infrastructure. Ideas at the intersection of technology, culture and imagination.',
  alternates: {
    canonical: '/inventions',
  },
  openGraph: {
    title: 'Inventions | AhhVeeDaa',
    description:
      'Early-stage concepts spanning hardware, media systems and digital infrastructure. Ideas at the intersection of technology, culture and imagination.',
    url: 'https://ahhveedaa.com/inventions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AhhVeeDaa — Inventions',
      },
    ],
  },
}

export default function Inventions() {
  return (
    <main className="flex min-h-screen flex-col items-start px-8 py-24">
      <div className="max-w-4xl">

        {/* Page Intro */}
        <h1 className="text-5xl font-bold mb-6 tracking-tight">Inventions</h1>
        <p className="text-xl text-gray-400 mb-12">Ideas at the intersection of technology, culture and imagination.</p>

        <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-16">
          <p>AhhVeeDaa develops early-stage concepts spanning hardware, media systems and digital infrastructure.</p>
          <p>Some ideas remain private while in development. Others are shared as previews of what&apos;s coming.</p>
          <p>The aim is simple: design systems that reshape how people create, communicate and experience technology.</p>
        </div>

        <div className="space-y-16">

          {/* Featured Concept — AVD */}
          <div className="border border-gray-800 rounded-lg p-8 hover:border-purple-500/30 hover:bg-gray-900/20 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-semibold text-gray-200">Advanced Visual Digitiser (AVD)</h2>
              <span className="inline-block px-3 py-1 text-xs font-medium border border-gray-700 rounded-full text-gray-400">Concept</span>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
              <p>The Advanced Visual Digitiser (AVD) is an experimental chip concept designed to rethink how visual information is captured and processed.</p>
              <p>Rather than treating vision as a traditional image pipeline, AVD explores new approaches to digitising visual environments at the hardware level.</p>
              <p>The concept sits at the intersection of photonics, sensing and computational perception, with the goal of enabling new categories of visual technology.</p>
            </div>
            <p className="text-gray-500 text-sm">More technical details will be shared in future research releases.</p>
          </div>

          {/* Ubuntu Hub */}
          <a href="https://ubuntuhub.io" target="_blank" rel="noopener noreferrer" className="block border border-gray-800 rounded-lg p-8 hover:border-purple-500/30 hover:bg-gray-900/20 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-semibold text-gray-200">Ubuntu Hub</h2>
              <span className="inline-block px-3 py-1 text-xs font-medium border border-gray-700 rounded-full text-gray-400">Infrastructure</span>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>Decentralised infrastructure for sovereign AI compute. A platform designed to anchor African intelligence to African energy.</p>
              <p className="text-gray-500 text-sm">Private development. Visit ubuntuhub.io →</p>
            </div>
          </a>

          {/* Cultural Infrastructure — Radio 243 */}
          <div className="border border-gray-800 rounded-lg p-8 hover:border-purple-500/30 hover:bg-gray-900/20 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-semibold text-gray-200">Radio 243</h2>
              <span className="inline-block px-3 py-1 text-xs font-medium border border-gray-700 rounded-full text-gray-400">Coming Soon</span>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
              <p>Radio 243 is a future media platform inspired by the energy and culture of Kinshasa.</p>
              <p>The concept begins as a local radio station format:</p>
            </div>
            <ul className="space-y-3 mb-6 pl-4">
              <li className="text-gray-300 border-l border-gray-700 pl-4">Daytime programming focused on music and cultural conversation.</li>
              <li className="text-gray-300 border-l border-gray-700 pl-4">Late night programming shifting toward deeper talk and storytelling.</li>
            </ul>
            <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
              <p>The project explores how radio, streaming and community media can evolve together.</p>
              <p>Launch details coming soon.</p>
              <p>For now, listen to the CPITP Playlist curated by AVD:</p>
            </div>
            <iframe
              style={{ borderRadius: '12px', border: 0 }}
              src="https://open.spotify.com/embed/playlist/22J212su8OrC7TS4cXjCRM?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>

          {/* Future Concepts */}
          <div className="border border-gray-800 rounded-lg p-8 hover:border-purple-500/30 hover:bg-gray-900/20 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-semibold text-gray-200">More Concepts in Development</h2>
              <span className="inline-block px-3 py-1 text-xs font-medium border border-gray-700 rounded-full text-gray-400">Research</span>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>Additional technology and media systems are currently in development.</p>
              <p>Some will appear here as previews once they reach the right stage.</p>
              <p>For now, they remain undisclosed.</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}