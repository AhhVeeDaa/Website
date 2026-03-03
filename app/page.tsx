import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AhhVeeDaa — Creative Technologist & Media Architect',
  description:
    'Creative technologist and media architect building proprietary systems across media, sound, narrative, and computation. Independent infrastructure in development.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AhhVeeDaa — Creative Technologist & Media Architect',
    description:
      'Creative technologist and media architect building proprietary systems across media, sound, narrative, and computation.',
    url: 'https://ahhveedaa.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AhhVeeDaa — Creative Technologist & Media Architect',
      },
    ],
  },
}

export default function Home() {
  const bgUrl = "https://scontent-lhr8-2.cdninstagram.com/v/t51.29350-15/307406531_840845000412901_1344133747052105911_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MjkzMDk3NDQ3NzUzMzYzMzg2Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuZGVmYXVsdF9pbWFnZS5DMyJ9&_nc_ohc=37WeVvL9Fn4Q7kNvwGfpD_H&_nc_oc=Adm8rwC20W7y92fRsufc-2kbbCDCbzKud97NHPy11WbyGBwmPm-dJfqMOSHb3rlyjaE&_nc_zt=23&_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_gid=DNI5_LAvS9ooqJdCSUvskA&_nc_ss=8&oh=00_Afwx_ppjtEDLjXyLloU-sFQqU1ARMdIhxxz9xYEdlyWz5Q&oe=69AC1268";

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-8 py-32">
      {/* Hotlinked Instagram hero background (decorative) */}
      <div className="absolute inset-x-0 top-0 -z-10">
        <div
          className="h-[60vh] bg-center bg-cover"
          style={{ backgroundImage: `url('${bgUrl}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 top-0 h-[60vh] bg-black/30" aria-hidden="true" />
      </div>

      <div className="relative text-center max-w-4xl hero-content">
        <h1 className="text-8xl sm:text-[9.5rem] font-extrabold mb-6 tracking-tighter leading-none">
          AhhVeeDaa
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
          Building proprietary systems across media, sound, literature and technology.
        </p>

        <p className="text-sm text-gray-500 mb-24 max-w-md mx-auto leading-relaxed">
          Live infrastructure in development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          <a
            href="/about"
            className="group p-8 rounded-xl border border-gray-800/60 hover:border-purple-500/30 hover:bg-gray-900/20 transition-all duration-500"
          >
            <h3 className="text-base font-semibold mb-2 group-hover:text-purple-400 transition-colors">About</h3>
            <p className="text-gray-700 text-sm">Origin</p>
          </a>

          <a
            href="/work"
            className="group p-8 rounded-xl border border-gray-800/60 hover:border-purple-500/30 hover:bg-gray-900/20 transition-all duration-500"
          >
            <h3 className="text-base font-semibold mb-2 group-hover:text-purple-400 transition-colors">Work</h3>
            <p className="text-gray-700 text-sm">Selected output</p>
          </a>

          <a
            href="/shop"
            className="group p-8 rounded-xl border border-gray-800/60 hover:border-purple-500/30 hover:bg-gray-900/20 transition-all duration-500"
          >
            <h3 className="text-base font-semibold mb-2 group-hover:text-purple-400 transition-colors">Shop</h3>
            <p className="text-gray-700 text-sm">Limited editions</p>
          </a>

          <a
            href="/inventions"
            className="group p-8 rounded-xl border border-gray-800/60 hover:border-purple-500/30 hover:bg-gray-900/20 transition-all duration-500"
          >
            <h3 className="text-base font-semibold mb-2 group-hover:text-purple-400 transition-colors">Inventions</h3>
            <p className="text-gray-700 text-sm">Projects</p>
          </a>

          <a
            href="/contact"
            className="group p-8 rounded-xl border border-gray-800/60 hover:border-purple-500/30 hover:bg-gray-900/20 transition-all duration-500"
          >
            <h3 className="text-base font-semibold mb-2 group-hover:text-purple-400 transition-colors">Contact</h3>
            <p className="text-gray-700 text-sm">Get in touch</p>
          </a>
        </div>
      </div>
    </main>
  )
}