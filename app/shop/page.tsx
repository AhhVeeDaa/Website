import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Selected artwork, objects and design experiments by AhhVeeDaa. Visit the Etsy shop for current listings.',
  alternates: { canonical: '/shop' },
  openGraph: {
    title: 'Shop | AhhVeeDaa',
    description: 'Artwork, objects and design experiments by AhhVeeDaa.',
    url: 'https://ahhveedaa.com/shop',
  },
}

export default function Shop() {
  return (
    <main className="page-shell py-20 sm:py-28">
      <header className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">Design &amp; commerce</p>
          <h1 className="text-5xl font-medium sm:text-7xl">Objects for the world being made.</h1>
          <p className="mt-6 text-base leading-7 text-muted sm:text-lg">Artwork, physical editions, clothing concepts and digital product experiments.</p>
        </div>
        <a href="https://ahhveedaa.etsy.com/uk" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-5 text-sm text-white transition-colors hover:border-violet-300/50 hover:bg-violet-300/10">Visit Etsy shop ↗</a>
      </header>

      <section aria-label="Current shop listings" className="grid gap-5 md:grid-cols-2">
        <a
          href="https://ahhveedaa.etsy.com/uk/listing/1373729875/avd-nft-acrylic-wall-panel"
          target="_blank"
          rel="noopener noreferrer"
          className="universe-card rounded-2xl p-7 sm:p-9"
        >
          <div className="flex items-center justify-between"><span className="eyebrow text-violet-200">Existing Etsy listing</span><span className="text-white/50" aria-hidden="true">↗</span></div>
          <div className="my-12 flex aspect-[1.4] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[radial-gradient(ellipse_at_55%_45%,rgba(130,100,255,.25),transparent_44%),linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.01))]">
            <span className="text-center text-4xl font-semibold tracking-[-0.08em] text-white/75 sm:text-6xl">AVD<span className="text-violet-300">/</span>ART</span>
          </div>
          <h2 className="text-2xl font-medium">AVD NFT Acrylic Wall Panel</h2>
          <p className="mt-3 text-sm leading-6 text-muted">A physical wall-panel edition featuring AVD NFT artwork. Follow the Etsy listing for current availability and details.</p>
        </a>
        <div className="glass-panel rounded-2xl p-7 sm:p-9">
          <p className="eyebrow text-amber-200">Design experiments</p>
          <h2 className="mt-8 text-2xl font-medium">Clothing &amp; digital objects</h2>
          <p className="mt-3 text-sm leading-6 text-muted">AVD clothing concepts, Teemill merchandise and digital or physical product experiments form part of the wider design practice. Check the linked shop for current listings.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://ahhveedaa.etsy.com/uk" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition-colors hover:border-violet-300/40 hover:text-white">Etsy ↗</a>
            <a href="https://ahhveedaa.teemill.com/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition-colors hover:border-violet-300/40 hover:text-white">Clothing &amp; Merchandise ↗</a>
            <a href="https://ahhveedaa.shoobs.com/#past" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition-colors hover:border-violet-300/40 hover:text-white">Events &amp; Tickets ↗</a>
          </div>
        </div>
      </section>
      <p className="mt-10 border-t border-white/10 pt-6 text-sm text-white/45">Product availability, specifications and fulfilment details are maintained by the linked shops.</p>
    </main>
  )
}
