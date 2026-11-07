import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ventures',
  description:
    'Companies, platforms and infrastructure concepts across photonics, AI, payments, mobility and shared digital worlds.',
  alternates: { canonical: '/ventures' },
  openGraph: {
    title: 'Ventures | AhhVeeDaa',
    description: 'Selected companies, platforms and developing infrastructure concepts.',
    url: 'https://ahhveedaa.com/ventures',
  },
}

type Initiative = {
  name: string
  type: string
  status: string
  description?: string
  tone: string
  href?: string
  linkLabel?: string
}

const initiatives: Initiative[] = [
  { name: 'La Vie Tech Ltd', type: 'Technology venture', status: 'Company', description: 'Founded by Avida Buyombo, with a focus on photonics, AI, IoT and proprietary systems.', tone: 'text-violet-200' },
  { name: 'Olives Expeditions', type: 'Company', status: 'Company', description: 'Company information and expedition details.', tone: 'text-amber-200', href: 'https://www.olivesexpeditions.uk/', linkLabel: 'Visit company ↗' },
  { name: 'Ubuntu Hub', type: 'AI platform & infrastructure', status: 'Development', description: 'Sovereign AI orchestration and infrastructure, with African AI infrastructure and governance in focus.', tone: 'text-teal-200', href: 'https://ubuntuhub.io', linkLabel: 'Visit platform ↗' },
  { name: 'Digi Mbongo', type: 'Payments infrastructure concept', status: 'Concept', description: 'Demo site for the Digi Mbongo concept. Not a live payment service.', tone: 'text-amber-200', href: 'https://digi-mbongo.vercel.app/', linkLabel: 'View demo ↗' },
  { name: 'Tether', type: 'Shared-world concept', status: 'Concept in development', description: 'Persistent social gaming and player-owned social environments and digital spaces.', tone: 'text-blue-200' },
  { name: 'VidaRide', type: 'Mobility concept', status: 'Concept', description: 'An early intelligent mobility and vehicle technology direction. Distinct from the newer AVD automotive sensing research.', tone: 'text-indigo-200' },
  { name: 'Inga Compute Infrastructure', type: 'Infrastructure vision', status: 'Long-term vision', description: 'A longer-term vision for African compute and energy infrastructure.', tone: 'text-emerald-200' },
  { name: 'AI Orchestration', type: 'Governance & systems', status: 'Research', description: 'Exploration of governance and agent-based infrastructure.', tone: 'text-fuchsia-200' },
]

export default function Ventures() {
  return (
    <main className="page-shell py-20 sm:py-28">
      <header className="mb-14 max-w-3xl">
        <p className="eyebrow mb-5">Companies · platforms · concepts</p>
        <h1 className="text-5xl font-medium sm:text-7xl">Building for what comes next.</h1>
        <p className="mt-6 text-base leading-7 text-muted sm:text-lg">A view into entrepreneurial and infrastructure directions. Each initiative is presented according to its current nature and stage.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {initiatives.map(({ name, type, status, description, tone, href, linkLabel }) => {
          const content = (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3"><p className={`eyebrow ${tone}`}>{type}</p><span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">{status}</span></div>
              <h2 className="mt-8 text-2xl font-medium">{name}</h2>{description && <p className="mt-3 text-sm leading-6 text-muted">{description}</p>}
              {href && <span className="mt-6 inline-block text-sm text-teal-200">{linkLabel}</span>}
            </>
          )
          return href ? (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="universe-card rounded-2xl p-6 sm:p-7">{content}</a>
          ) : (
            <article key={name} className="glass-panel rounded-2xl p-6 sm:p-7">{content}</article>
          )
        })}
      </div>
      <div className="mt-12 border-t border-white/10 pt-7 text-sm text-white/45">Exploratory work is not represented as a launched service or operating business unless noted.</div>
    </main>
  )
}
