import type { Metadata } from 'next'
import ArtworkLightbox from '@/components/ArtworkLightbox'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected audio, media, publishing and creative projects by Avida Buyombo / AhhVeeDaa.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Work | AhhVeeDaa',
    description: 'Selected work across audio, broadcast, publishing and creative projects.',
    url: 'https://ahhveedaa.com/work',
  },
}

type MediaProject = {
  title: string
  detail: string
  tone: string
  image?: string
  alt?: string
}

const projects: MediaProject[] = [
  {
    title: 'Tether',
    detail: 'Persistent social gaming and shared-world concept in development.',
    tone: 'text-teal-200',
    image: '/images/projects/tether-concept.png',
    alt: 'Tether concept artwork showing two figures in a futuristic city.',
  },
  {
    title: 'Kampala Confessions',
    detail: 'A reality television show concept based in Kampala.',
    tone: 'text-blue-200',
  },
]

const playlistEmbeds = [
  {
    title: 'The AVD Playlist',
    src: 'https://open.spotify.com/embed/playlist/1J4EHhcgZC5lh704ZksHYB?utm_source=generator&theme=0&si=9d4b0048df074e5c',
  },
  {
    title: 'Digital Sunset',
    src: 'https://open.spotify.com/embed/album/6U0K9APl4GIwchbKwFymyt?utm_source=generator&theme=0&si=f4b757dad1354296',
  },
  {
    title: 'Asibe Happy',
    src: 'https://open.spotify.com/embed/album/0RORB0epltXOtnHMwDhk4g?utm_source=generator&theme=0&si=b5a0a78d4d2141e6',
  },
]

export default function Work() {
  return (
    <main className="page-shell py-20 sm:py-28">
      <header className="mb-16 max-w-3xl">
        <p className="eyebrow mb-5">Selected output</p>
        <h1 className="text-5xl font-medium sm:text-7xl">Work in many forms.</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          Music, moving image, broadcast and writing — different expressions within one evolving practice.
        </p>
      </header>

      <section id="audio" className="scroll-mt-28 border-t border-white/10 py-12">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">01 / Audio systems</p>
            <h2 className="text-3xl font-medium">Music &amp; sound</h2>
          </div>
          <a
            href="https://open.spotify.com/artist/5t9rlutPW2FIX8CKYOilBs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 hover:text-white"
          >
            AhhVeeDaa on Spotify ↗
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <iframe
            data-testid="embed-iframe"
            className="h-[152px] w-full"
            src="https://open.spotify.com/embed/artist/5t9rlutPW2FIX8CKYOilBs?utm_source=generator&theme=0"
            title="AhhVeeDaa artist catalogue on Spotify"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <article className="glass-panel rounded-xl p-5">
            <h3 className="font-medium">My Melody</h3>
            <p className="mt-2 text-sm text-muted">Featuring Yxng Drilly.</p>
            <a
              href="https://www.youtube.com/watch?v=zaDNmK7YJF54BLcDmK7jaOHlrZJOyXUxws"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-10 items-center text-sm text-violet-200 hover:text-white"
            >
              Listen Here ↗
            </a>
          </article>
          <article className="glass-panel rounded-xl p-5">
            <h3 className="font-medium">Digital Sunset</h3>
            <p className="mt-2 text-sm text-muted">Music and visual dimensions.</p>
            <a
              href="https://youtube.com/playlist?list=OLAK5uy_mV90B_MD439iqrABilgqSKv_HvzJK16dc&si=QYljgppa5CZWrFI5"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-10 items-center text-sm text-violet-200 hover:text-white"
            >
              Listen Here ↗
            </a>
          </article>
          <article className="glass-panel rounded-xl p-5">
            <h3 className="font-medium">Congolese Gospel Club</h3>
            <p className="mt-2 text-sm text-muted">God of Heaven and the Congo.</p>
            <a
              href="https://www.youtube.com/@CongoleseGospelClub"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-10 items-center text-sm text-violet-200 hover:text-white"
            >
              Listen Here ↗
            </a>
          </article>
        </div>
      </section>

      <section id="broadcast" className="scroll-mt-28 border-t border-white/10 py-12">
        <div className="mb-7">
          <p className="eyebrow mb-3">02 / Broadcast &amp; media</p>
          <h2 className="text-3xl font-medium">Formats, voices, worlds.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.3fr_.7fr]">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/zaDNnm3yyWA?si=OTcMDvZ1zNc2oMeS"
                title="AhhVeeDaa selected video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <p className="eyebrow mb-3">In development · Coming soon</p>
            <h3 className="text-2xl font-medium">Radio 243</h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              A Kinshasa-inspired radio platform: daytime music and cultural conversation, with late-night talk and storytelling.
            </p>
            <a
              href="https://open.spotify.com/playlist/22J212su8OrC7TS4cXjCRM"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex text-sm text-violet-200 hover:text-white"
            >
              Listen to the CPITP playlist ↗
            </a>
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {projects.map(({ title, detail, tone, image, alt }) => (
            <article key={title} className="glass-panel overflow-hidden rounded-xl">
              <div className="p-5">
                <h3 className={`text-lg font-medium ${tone}`}>{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{detail}</p>
                {image && alt && <ArtworkLightbox src={image} alt={alt} title={title} />}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="publishing" className="scroll-mt-28 border-t border-white/10 py-12">
        <div className="mb-7">
          <p className="eyebrow mb-3">03 / Published works</p>
          <h2 className="text-3xl font-medium">Writing &amp; publishing</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="https://read.amazon.co.uk/sample/B0GMQZGFLL?clientId=share"
            target="_blank"
            rel="noopener noreferrer"
            className="universe-card rounded-2xl p-7"
          >
            <p className="eyebrow text-violet-200">Book</p>
            <h3 className="mt-8 text-2xl font-medium">TOP GIRL</h3>
            <span className="mt-6 block text-sm text-white/60">Read a sample ↗</span>
          </a>
          <a
            href="https://read.amazon.co.uk/sample/B0G5PTF64N?clientId=share"
            target="_blank"
            rel="noopener noreferrer"
            className="universe-card rounded-2xl p-7"
          >
            <p className="eyebrow text-blue-200">Book • The inspiration behind the robot</p>
            <h3 className="mt-8 text-2xl font-medium">WITNESS</h3>
            <span className="mt-6 block text-sm text-white/60">Read a sample ↗</span>
          </a>
        </div>
      </section>

      <section className="border-t border-white/10 py-12">
        <p className="eyebrow mb-3">04 / Selected projects</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {playlistEmbeds.map(({ title, src }) => (
            <article key={title} className="glass-panel overflow-hidden rounded-xl">
              <h3 className="px-5 pt-5 text-lg font-medium">{title}</h3>
              <iframe
                className="mt-4 h-[352px] w-full"
                src={src}
                title={`${title} Spotify embed`}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
