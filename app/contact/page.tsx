export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-start px-8 py-24">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Contact</h1>
        <p className="text-gray-600 mb-16">Strategic enquiries only.</p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Direct</h3>
            <a href="https://wa.me/447944958815" target="_blank" rel="noopener noreferrer" className="inline-block border border-gray-800 rounded-xl px-6 py-3 text-white font-medium hover:border-purple-500/40 hover:bg-gray-900/30 transition-all duration-300">
              WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Email</h3>
            <a href="mailto:contact@ahhveedaa.com" className="text-gray-400 hover:text-purple-400 transition-colors">contact@ahhveedaa.com</a>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Proposals</h3>
            <a href="mailto:avidabuyombo1@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">avidabuyombo1@gmail.com</a>
          </div>
        </div>
      </div>
    </main>
  )
}