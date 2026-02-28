export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 py-32">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight">
          AhhVeeDaa
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 mb-4">
          Creative Technologist &amp; Media Architect
        </p>
        <p className="text-lg text-gray-500 mb-16 leading-relaxed max-w-2xl mx-auto">
          Building culture, systems, and signal across media, music, authorship and advanced technology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <a
            href="/about"
            className="group p-8 rounded-xl border border-gray-800 hover:border-purple-500/50 hover:bg-gray-900/50 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">About</h3>
            <p className="text-gray-500 text-sm">The vision and the architect behind it</p>
          </a>

          <a
            href="/work"
            className="group p-8 rounded-xl border border-gray-800 hover:border-purple-500/50 hover:bg-gray-900/50 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">Work</h3>
            <p className="text-gray-500 text-sm">Music, media, writing &amp; signature projects</p>
          </a>

          <a
            href="/media"
            className="group p-8 rounded-xl border border-gray-800 hover:border-purple-500/50 hover:bg-gray-900/50 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">Media</h3>
            <p className="text-gray-500 text-sm">Audio, visual &amp; interactive experiences</p>
          </a>

          <a
            href="/inventions"
            className="group p-8 rounded-xl border border-gray-800 hover:border-purple-500/50 hover:bg-gray-900/50 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">Inventions</h3>
            <p className="text-gray-500 text-sm">Hardware, systems &amp; future frameworks</p>
          </a>

          <a
            href="/contact"
            className="group p-8 rounded-xl border border-gray-800 hover:border-purple-500/50 hover:bg-gray-900/50 transition-all duration-300 sm:col-span-2 lg:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">Contact</h3>
            <p className="text-gray-500 text-sm">Strategic inquiries, partnerships &amp; collaboration</p>
          </a>
        </div>
      </div>
    </main>
  );
}