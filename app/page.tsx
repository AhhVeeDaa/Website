export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-8 py-32">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative text-center max-w-4xl">
        <h1 className="text-7xl sm:text-9xl font-bold mb-6 tracking-tighter">
          AhhVeeDaa
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-24 max-w-md mx-auto leading-relaxed">
          Building proprietary systems across media, sound, literature and technology.
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
            <p className="text-gray-700 text-sm">Proprietary systems</p>
          </a>

          <a
            href="/contact"
            className="group p-8 rounded-xl border border-gray-800/60 hover:border-purple-500/30 hover:bg-gray-900/20 transition-all duration-500 sm:col-span-2 lg:col-span-2"
          >
            <h3 className="text-base font-semibold mb-2 group-hover:text-purple-400 transition-colors">Contact</h3>
            <p className="text-gray-700 text-sm">Strategic enquiries only</p>
          </a>
        </div>
      </div>
    </main>
  );
}