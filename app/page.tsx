export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 py-32">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight">
          AhhVeeDaa
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 mb-8">
          Creative Technologist & Media Architect
        </p>
        <p className="text-lg text-gray-500 mb-12 leading-relaxed">
          Building culture, systems, and signal across media, music, authorship and advanced technology.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <a 
            href="/about" 
            className="p-6 rounded-lg border border-gray-700 hover:border-gray-500 hover:bg-gray-900/50 transition-colors"
          >
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-gray-400">Learn about my work and vision</p>
          </a>
          
          <a 
            href="/work" 
            className="p-6 rounded-lg border border-gray-700 hover:border-gray-500 hover:bg-gray-900/50 transition-colors"
          >
            <h3 className="text-lg font-semibold mb-2">Work</h3>
            <p className="text-gray-400">Explore my portfolio and projects</p>
          </a>
          
          <a 
            href="/inventions" 
            className="p-6 rounded-lg border border-gray-700 hover:border-gray-500 hover:bg-gray-900/50 transition-colors"
          >
            <h3 className="text-lg font-semibold mb-2">Inventions</h3>
            <p className="text-gray-400">Discover innovative creations</p>
          </a>
          
          <a 
            href="/contact" 
            className="p-6 rounded-lg border border-gray-700 hover:border-gray-500 hover:bg-gray-900/50 transition-colors"
          >
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-gray-400">Get in touch with me</p>
          </a>
        </div>
      </div>
    </main>
  );
}
