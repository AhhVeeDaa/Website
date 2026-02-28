export default function Work() {
  return (
    <main className="flex min-h-screen flex-col items-start px-8 py-24">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold mb-12 tracking-tight">Work</h1>

        {/* media embeds */}
        <div className="space-y-16">
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Music</h3>
            <div className="w-full rounded-xl overflow-hidden">
              <iframe data-testid="embed-iframe" className="w-full h-[152px]" style={{borderRadius:12}} src="https://open.spotify.com/embed/artist/5t9rlutPW2FIX8CKYOilBs?utm_source=generator&theme=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Media</h3>
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <iframe width="560" height="315" className="w-full h-full" src="https://www.youtube.com/embed/zaDNnm3yyWA?si=JaetSh6a97KkM2KO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Writing</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a href="https://read.amazon.co.uk/sample/B0GMQZGFLL?clientId=share" target="_blank" rel="noopener noreferrer" className="border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-colors duration-300">
                <h4 className="text-lg font-medium text-gray-100 mb-2">TOP GIRL</h4>
              </a>
              <a href="https://read.amazon.co.uk/sample/B0G5PTF64N?clientId=share" target="_blank" rel="noopener noreferrer" className="border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-colors duration-300">
                <h4 className="text-lg font-medium text-gray-100 mb-2">WITNESS</h4>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-200">Evolution</h2>
          <p className="text-gray-400 leading-relaxed">
            I began in media, exploring visual and auditory storytelling. Music followed, turning sound into a medium of influence. From there, I ventured into conceptual systems and invention, bridging creative expression with technological architecture. Today, I operate at the nexus of culture, media, music, and advanced innovation.
          </p>
        </div>
      </div>
    </main>
  )
}