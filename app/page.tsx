import type { Metadata } from 'next'
import ArtworkLightbox from '@/components/ArtworkLightbox'

export const metadata: Metadata = {
  title: 'AhhVeeDaa — Creative Technologist & Media Architect',
  description:
    'Building across media, sound, literature and technology. The digital home of Avida Buyombo, creative technologist and media architect.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AhhVeeDaa — Creative Technologist & Media Architect',
    description:
      'Creative technologist and media architect building across media, sound, literature and technology.',
    url: 'https://ahhveedaa.com',
  },
}

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden border-b border-white/[0.06]">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -right-24 top-0 h-[34rem] w-[34rem] rounded-full bg-violet-600/15 blur-[120px]" />
          <div className="absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.055]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
        </div>
        <div className="page-shell relative py-24 sm:py-32">
          <p className="eyebrow mb-7">Artist × Technologist × Visionary</p>
          <h1 className="max-w-5xl text-[clamp(3.8rem,11vw,9rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
            AhhVeeDaa<span className="text-violet-300">.</span>
          </h1>
          <div className="mt-8 grid max-w-5xl gap-7 md:grid-cols-[minmax(0,1fr)_14rem] md:items-end">
            <div>
              <p className="text-lg text-white sm:text-2xl">Creative Technologist &amp; Media Architect.</p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base">
                Building across media, sound, literature and technology.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <ArtworkLightbox
                src="/images/avida-buyombo.jpg"
                alt="Avida Buyombo"
                title="Avida Buyombo"
              />
              <a href="#universe" className="group inline-flex min-h-12 items-center gap-3 self-start rounded-full border border-white/15 px-5 text-sm text-white transition-colors hover:border-violet-300/50 hover:bg-violet-300/10">
                Explore the universe <span aria-hidden="true" className="transition-transform group-hover:translate-y-1">↓</span>
              </a>
            </div>
          </div>
          <div className="mt-20 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/40">
            <span className="h-px w-12 bg-violet-300/60" /> Independent · Interdisciplinary · In evolution
          </div>
        </div>
      </section>

      <section id="universe" className="page-shell scroll-mt-24 py-24 sm:py-32">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">A connected practice</p>
            <h2 className="text-4xl font-medium sm:text-6xl">The Universe</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted">
            One body working &amp; moving between culture, creative expression and computation. Explore his world.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <a href="/work#audio" className="universe-card card-glow-blue scroll-reveal rounded-2xl p-7 sm:p-8">
            <span className="eyebrow text-blue-200">01 / Sound</span><h3 className="mt-12 text-2xl">Music &amp; sound</h3><p className="mt-3 text-sm leading-6 text-muted">Original music, listening worlds and sonic experiments.</p><span className="mt-8 block text-sm text-blue-200">Enter audio ↗</span>
          </a>
          <a href="/work#broadcast" className="universe-card card-glow-amber scroll-reveal rounded-2xl p-7 sm:p-8">
            <span className="eyebrow text-amber-200">02 / Culture</span><h3 className="mt-12 text-2xl">Media &amp; broadcast</h3><p className="mt-3 text-sm leading-6 text-muted">Formats and platforms shaped by voice, place and exchange.</p><span className="mt-8 block text-sm text-amber-200">Enter media ↗</span>
          </a>
          <a href="/work#publishing" className="universe-card card-glow-violet scroll-reveal rounded-2xl p-7 sm:p-8">
            <span className="eyebrow text-violet-200">03 / Narrative</span><h3 className="mt-12 text-2xl">Writing &amp; publishing</h3><p className="mt-3 text-sm leading-6 text-muted">Published works and ideas carried through story.</p><span className="mt-8 block text-sm text-violet-200">Enter writing ↗</span>
          </a>
          <a href="/inventions" className="universe-card card-glow-teal scroll-reveal rounded-2xl p-7 sm:p-8">
            <span className="eyebrow text-teal-200">04 / Research</span><h3 className="mt-12 text-2xl">Inventions</h3><p className="mt-3 text-sm leading-6 text-muted">Explorations in sensing, AI and computational systems.</p><span className="mt-8 block text-sm text-teal-200">Enter research ↗</span>
          </a>
          <a href="/ventures" className="universe-card card-glow-indigo scroll-reveal rounded-2xl p-7 sm:p-8">
            <span className="eyebrow text-indigo-200">05 / Infrastructure</span><h3 className="mt-12 text-2xl">Ventures</h3><p className="mt-3 text-sm leading-6 text-muted">Companies, platforms and infrastructure visions.</p><span className="mt-8 block text-sm text-indigo-200">Enter ventures ↗</span>
          </a>
          <a href="/shop" className="universe-card card-glow-gold scroll-reveal rounded-2xl p-7 sm:p-8">
            <span className="eyebrow text-yellow-100">06 / Objects</span><h3 className="mt-12 text-2xl">Design &amp; shop</h3><p className="mt-3 text-sm leading-6 text-muted">Artwork, objects and wearable experiments.</p><span className="mt-8 block text-sm text-yellow-100">Enter shop ↗</span>
          </a>
        </div>
      </section>

      <section className="page-shell pb-24 sm:pb-32">
        <div className="glass-panel grid gap-8 rounded-3xl p-7 sm:p-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow mb-4">Selected direction</p>
            <h2 className="max-w-2xl text-3xl font-medium leading-tight sm:text-4xl">Ideas move between disciplines. The work is to make the connections tangible.</h2>
          </div>
          <a href="/inventions" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-violet-200">View current explorations ↗</a>
        </div>
      </section>
    </main>
  )
}