export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 py-32">
      <div className="text-center max-w-4xl">
        <h1 className="text-6xl sm:text-8xl font-bold mb-8 tracking-tighter">
          AhhVeeDaa
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 mb-20 leading-relaxed max-w-xl mx-auto">
          Architecting creative infrastructure across media, music, authorship and technology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          <a
            href="/about"
            className="group p-8 rounded-xl border border-gray-800/60 hover:border-purple-500/40 hover:bg-gray-900/30 transition-all duration-300"
          >
            <h3 className="text-base font-semibold mb-2 group-hover:text-purple-400 transition-colors">About</h3>
            <p className="text-gray-600 text-sm">The architect</p>
          </a>

          <a
            href="/work"
            className="group p-8 rounded-xl border border-gray-800/60 hover:border-purple-500/40 hover:bg-gray-900/30 transition-all duration-300"
          >
            <h3 className="text-base font-semibold mb-2 group-hover:text-purple-400 transition-colors">Work</h3>
            <p className="text-gray-600 text-sm">Selected outputs</p>
          </a>

          <a
            href="/shop"
            className="group p-8 rounded-xl border border-gray-800/60 hover:border-purple-500/40 hover:bg-gray-900/30 transition-all duration-300"
          >
            <h3 className="text-base font-semibold mb-2 group-hover:text-purple-400 transition-colors">Shop</h3>
            <p className="text-gray-600 text-sm">Limited editions</p>
          </a>

          <a
            href="/inventions"
            className="group p-8 rounded-xl border border-gray-800/60 hover:border-purple-500/40 hover:bg-gray-900/30 transition-all duration-300"
          >
            <h3 className="text-base font-semibold mb-2 group-hover:text-purple-400 transition-colors">Inventions</h3>
            <p className="text-gray-600 text-sm">Proprietary architecture</p>
          </a>

          <a
            href="/contact"
            className="group p-8 rounded-xl border border-gray-800/60 hover:border-purple-500/40 hover:bg-gray-900/30 transition-all duration-300 sm:col-span-2 lg:col-span-2"
          >
            <h3 className="text-base font-semibold mb-2 group-hover:text-purple-400 transition-colors">Contact</h3>
            <p className="text-gray-600 text-sm">Strategic enquiries only</p>
          </a>
        </div>
      </div>
    </main>
  );
}