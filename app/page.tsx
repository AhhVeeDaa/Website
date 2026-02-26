import AdSense from "../components/AdSense";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 py-32">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl sm:text-6xl font-bold mb-8 tracking-tight">
          AhhVeeDaa
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 mb-8">
          Creative Technologist & Media Architect
        </p>
        <blockquote className="border-l-4 border-gray-600 pl-6 my-12 italic text-gray-300 text-lg">
          "Signal over noise. Every medium, every system, every note, every line is an opportunity to craft clarity and resonance. I shape culture and technology into cohesive expression."
        </blockquote>
        <p className="text-lg text-gray-500 mb-12 leading-relaxed">
          Across media, music, authorship, and invention, I translate ideas into impact. I navigate the intersection of art, technology, and culture, building work that commands attention and endures.
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
        {/* sample ad unit */}
        <div className="mt-12 w-full">
          <AdSense />
        </div>
      </div>
    </main>
  );
}
