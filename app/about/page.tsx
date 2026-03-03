import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Creative technologist and media architect operating across sound, narrative, and systems design. Independent builder exploring the intersection of culture and computation.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About | AhhVeeDaa',
    description:
      'Creative technologist and media architect operating across sound, narrative, and systems design.',
    url: 'https://ahhveedaa.com/about',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AhhVeeDaa — About',
      },
    ],
  },
}

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-start px-8 py-24">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-16 tracking-tight">About</h1>

        <div className="space-y-6 text-xl text-gray-300 leading-relaxed">
          <p>Creative technologist and media architect operating across sound, narrative, and systems design.</p>
          <p>My work spans music, writing, broadcast, and experimental technology — each discipline informing the other.</p>
          <p>I build independently, develop proprietary concepts, and explore the intersection of culture and computation.</p>
          <p>This platform presents selected outputs. The broader architecture continues to evolve.</p>
        </div>
      </div>
    </main>
  )
}