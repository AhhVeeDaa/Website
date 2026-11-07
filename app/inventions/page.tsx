import type { Metadata } from 'next'
import ArtworkLightbox from '@/components/ArtworkLightbox'

export const metadata: Metadata = {
  title: 'Inventions',
  description: 'Selected inventions and concepts by Avida Buyombo.',
  alternates: { canonical: '/inventions' },
  openGraph: {
    title: 'Inventions | AhhVeeDaa',
    description: 'Selected inventions and concepts by Avida Buyombo.',
    url: 'https://ahhveedaa.com/inventions',
  },
}

const concepts = [
  { title: 'AVD AI Phone', status: 'Concept', category: 'AI-native device', tone: 'text-teal-200' },
  { title: 'Digital Twin of Africa', status: 'Concept in development', category: 'Computational systems', tone: 'text-amber-200' },
  { title: 'AVDNET', status: 'Concept in development', category: 'Concept', tone: 'text-blue-200' },
  { title: 'Lekky', status: 'Concept in development', category: 'Concept', tone: 'text-violet-200' },
]

export default function Inventions() {
  return (
    <main className="page-shell py-20 sm:py-28">
      <header className="mb-14 max-w-3xl">
        <p className="eyebrow mb-5">Private research environment</p>
        <h1 className="text-5xl font-medium sm:text-7xl">Inventions &amp; explorations.</h1>
        <p className="mt-6 text-base leading-7 text-muted sm:text-lg">Selected concepts and explorations. Some work remains private; public notes stay at a high level.</p>
      </header>

      <section className="relative overflow-hidden rounded-3xl border border-violet-300/20 bg-gradient-to-br from-violet-500/[0.12] via-white/[0.03] to-blue-500/[0.08] p-7 sm:p-11">
        <div className="pointer-events-none absolute -right-10 -top-20 h-80 w-80 rounded-full bg-violet-500/15 blur-[90px]" aria-hidden="true" />
        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <p className="eyebrow">Featured research · In development</p><span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/65">Research</span>
        </div>
        <h2 className="relative mt-10 max-w-3xl text-4xl font-medium leading-tight sm:text-6xl">AVD</h2>
        <p className="relative mt-6 max-w-2xl text-base leading-7 text-white/70">Concept in development. Further details remain private.</p>
      </section>

      <section className="mt-8">
        <article className="glass-panel overflow-hidden rounded-2xl">
          <div className="p-6 sm:p-7">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow text-blue-200">Witness One · Physical AI companion</p>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">Concept in development</span>
              </div>
              <h2 className="mt-3 text-xl font-medium">Witness One</h2>
            </div>
          </div>
          <div className="px-6 pb-6 sm:px-7 sm:pb-7">
            <ArtworkLightbox
              src="/images/projects/witness-one-concept.png"
              alt="Witness One concept artwork showing a small robot on a two-wheeled base."
              title="Witness One"
            />
          </div>
        </article>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        <article className="glass-panel overflow-hidden rounded-2xl">
          <div className="p-6 pb-0 sm:p-7 sm:pb-0">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="eyebrow text-blue-200">Mobility concept</p>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">Concept in development</span>
            </div>
            <h2 className="mt-6 text-2xl font-medium">VidaRide</h2>
          </div>
          <div className="p-6 pt-0 sm:p-7 sm:pt-0">
            <ArtworkLightbox
              src="/images/projects/vidaride-concept.png"
              alt="VidaRide concept artwork"
              title="VidaRide"
            />
          </div>
        </article>

        <article className="glass-panel overflow-hidden rounded-2xl">
          <div className="p-6 pb-0 sm:p-7 sm:pb-0">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="eyebrow text-amber-200">Concept</p>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">Concept in development</span>
            </div>
            <h2 className="mt-6 text-2xl font-medium">Kora</h2>
          </div>
          <div className="grid gap-4 p-6 pt-0 sm:grid-cols-2 sm:p-7 sm:pt-0">
            <ArtworkLightbox
              src="/images/projects/kora-mark.png"
              alt="Kora project mark"
              title="Kora mark"
            />
            <ArtworkLightbox
              src="/images/projects/kora-network.png"
              alt="Kora project concept artwork showing an Africa rail network"
              title="Kora network concept"
            />
            <ArtworkLightbox
              src="/images/projects/kora-concept.png"
              alt="Kora project concept poster"
              title="Kora concept poster"
            />
          </div>
        </article>
      </section>

      <section className="mt-4 grid gap-4 md:grid-cols-2">
        {concepts.map(({ title, status, category, tone }) => (
          <article key={title} className="glass-panel rounded-2xl p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className={`eyebrow ${tone}`}>{category}</p>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">{status}</span>
            </div>
            <h2 className="mt-8 text-2xl font-medium">{title}</h2>
          </article>
        ))}
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        <a href="https://ubuntuhub.io" target="_blank" rel="noopener noreferrer" className="universe-card rounded-2xl p-7">
          <p className="eyebrow text-teal-200">AI infrastructure · Development</p><h2 className="mt-8 text-2xl font-medium">Ubuntu Hub</h2><p className="mt-3 text-sm leading-6 text-muted">Sovereign AI orchestration and infrastructure, with African AI infrastructure and governance in focus. Inga-powered compute remains a longer-term vision.</p><span className="mt-6 inline-block text-sm text-teal-200">Visit Ubuntu Hub ↗</span>
        </a>
        <div className="glass-panel rounded-2xl p-7">
          <p className="eyebrow text-amber-200">Media platform · Coming soon</p><h2 className="mt-8 text-2xl font-medium">Radio 243</h2><p className="mt-3 text-sm leading-6 text-muted">A Kinshasa-inspired radio platform for daytime music and cultural conversation, with late-night talk and storytelling.</p><a href="https://open.spotify.com/playlist/22J212su8OrC7TS4cXjCRM" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm text-amber-200 hover:text-white">Explore the CPITP playlist ↗</a>
        </div>
      </section>

      <p className="mt-12 border-t border-white/10 pt-7 text-sm text-white/45">Additional private concepts remain undisclosed while in exploration.</p>
    </main>
  )
}
