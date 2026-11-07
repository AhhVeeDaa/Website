import type { Metadata } from 'next'
import ArtworkLightbox from '@/components/ArtworkLightbox'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Avida Buyombo: creative technologist and media architect working across sound, narrative, technology and systems design.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | AhhVeeDaa',
    description:
      'Creative technologist and media architect working across sound, narrative, technology and systems design.',
    url: 'https://ahhveedaa.com/about',
  },
}

export default function About() {
  return (
    <main className="page-shell py-20 sm:py-28">
      <header className="max-w-4xl">
        <p className="eyebrow mb-5">About / Avida Buyombo</p>
        <h1 className="text-5xl font-medium leading-[1.05] sm:text-7xl">A practice without borders.</h1>
      </header>

      <div className="mt-16 grid gap-12 border-t border-white/10 pt-10 md:grid-cols-[minmax(0,1.4fr)_minmax(14rem,.6fr)] md:gap-20">
        <div className="space-y-7 text-lg leading-8 text-white/75 sm:text-xl sm:leading-9">
          <p>Creative technologist and media architect operating across sound, narrative, technology and systems design.</p>
          <p>My work spans music, writing, broadcast, invention and experimental technology — disciplines that continuously inform one another.</p>
          <p>Independent in execution, interdisciplinary by nature, I develop creative works, explore proprietary systems and build concepts that connect culture with computation.</p>
          <p>This platform presents selected outputs and ongoing explorations. The broader architecture continues to evolve.</p>
        </div>
        <aside className="glass-panel h-fit rounded-2xl p-7">
          <ArtworkLightbox
            src="/images/avida-buyombo.jpg"
            alt="Avida Buyombo"
            title="Avida Buyombo"
          />
        </aside>
      </div>
      <div className="mt-20 border-t border-white/10 pt-8">
        <a href="/contact" className="text-sm text-violet-200 transition-colors hover:text-white">For enquiries and correspondence <span aria-hidden="true">↗</span></a>
      </div>
    </main>
  )
}
