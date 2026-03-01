export default function Work() {
  return (
    <main className="flex min-h-screen flex-col items-start px-8 py-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl font-bold mb-20 tracking-tight">Work</h1>

        <div className="space-y-20">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Audio Systems</h3>
            <div className="w-full rounded-xl overflow-hidden">
              <iframe data-testid="embed-iframe" className="w-full h-[152px]" style={{borderRadius:12}} src="https://open.spotify.com/embed/artist/5t9rlutPW2FIX8CKYOilBs?utm_source=generator&theme=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Broadcast Architecture</h3>
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <iframe width="560" height="315" className="w-full h-full" src="https://www.youtube.com/embed/zaDNnm3yyWA?si=JaetSh6a97KkM2KO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Published Works</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a href="https://read.amazon.co.uk/sample/B0GMQZGFLL?clientId=share" target="_blank" rel="noopener noreferrer" className="border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-colors duration-500">
                <h4 className="text-lg font-medium text-gray-100">TOP GIRL</h4>
              </a>
              <a href="https://read.amazon.co.uk/sample/B0G5PTF64N?clientId=share" target="_blank" rel="noopener noreferrer" className="border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-colors duration-500">
                <h4 className="text-lg font-medium text-gray-100">WITNESS</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}