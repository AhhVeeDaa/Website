import type { Metadata } from 'next'
import Image from 'next/image'
import WitnessOneModel from '@/components/WitnessOneModel'

export const metadata: Metadata = {
  title: 'Inventions',
  description:
    'Research and concept work across photonics, AI, sensing and computational perception. Selected explorations by Avida Buyombo.',
  alternates: { canonical: '/inventions' },
  openGraph: {
    title: 'Inventions | AhhVeeDaa',
    description: 'Selected research and concepts across photonics, AI, sensing and computational perception.',
    url: 'https://ahhveedaa.com/inventions',
  },
}

const concepts = [
  { title: 'AVD AI Phone', status: 'Concept', category: 'AI-native device', tone: 'text-teal-200' },
  { title: 'Digital Twin of Africa', status: 'Concept in development', category: 'Computational systems', tone: 'text-amber-200' },
  { title: 'Kora', status: 'Concept in development', category: 'Concept', tone: 'text-amber-200' },
  { title: 'AVDNET', status: 'Concept in development', category: 'Concept', tone: 'text-blue-200' },
  { title: 'Lekky', status: 'Concept in development', category: 'Concept', tone: 'text-violet-200' },
]

export default function Inventions() {
  return (
    <main className="page-shell py-20 sm:py-28">
      <header className="mb-14 max-w-3xl">
        <p className="eyebrow mb-5">Private research environment</p>
        <h1 className="text-5xl font-medium sm:text-7xl">Inventions &amp; explorations.</h1>
        <p className="mt-6 text-base leading-7 text-muted sm:text-lg">Selected research and concepts across sensing, photonics, AI and systems. Some work remains private; public notes stay at a high level.</p>
      </header>

      <section className="relative overflow-hidden rounded-3xl border border-violet-300/20 bg-gradient-to-br from-violet-500/[0.12] via-white/[0.03] to-blue-500/[0.08] p-7 sm:p-11">
        <div className="pointer-events-none absolute -right-10 -top-20 h-80 w-80 rounded-full bg-violet-500/15 blur-[90px]" aria-hidden="true" />
        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <p className="eyebrow">Featured research · In development</p><span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/65">Research</span>
        </div>
        <h2 className="relative mt-10 max-w-3xl text-4xl font-medium leading-tight sm:text-6xl">Advanced Visual Digitiser <span className="text-violet-200">(AVD)</span></h2>
        <p className="relative mt-6 max-w-2xl text-base leading-7 text-white/70">A proprietary photonic signal-conditioning chip concept exploring visual sensing, photonics and computational perception.</p>
        <p className="relative mt-5 max-w-2xl text-sm leading-6 text-white/45">Technical implementation details are not public. No schematics or unpublished technical materials are disclosed here.</p>
      </section>

      <section className="mt-8">
        <WitnessOneModel />
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
          <Image
            src="/images/projects/vidaride-concept.png"
            alt="VidaRide concept artwork"
            width={1149}
            height={1369}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="mt-6 h-auto w-full"
          />
        </article>

        <article className="glass-panel overflow-hidden rounded-2xl">
          <div className="p-6 pb-0 sm:p-7 sm:pb-0">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="eyebrow text-amber-200">Concept</p>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">Concept in development</span>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <Image
                src="/images/projects/kora-mark.png"
                alt="Kora project mark"
                width={1254}
                height={1254}
                sizes="80px"
                className="h-20 w-20 rounded-lg bg-white object-contain"
              />
              <h2 className="text-2xl font-medium">Kora</h2>
            </div>
          </div>
          <Image
            src="/images/projects/kora-network.png"
            alt="Kora project concept artwork showing an Africa rail network"
            width={1536}
            height={1024}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="mt-6 h-auto w-full"
          />
          <Image
            src="/images/projects/kora-concept.png"
            alt="Kora project concept poster"
            width={1024}
            height={1536}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full"
          />
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
