export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-start px-8 py-24">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold mb-12 tracking-tight">Contact</h1>
        
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 mb-12">
          <p className="text-lg text-gray-300 leading-relaxed">
            I welcome collaboration with aligned creators, visionary partners, and strategic inquiries. Contact is curated to ensure focus, impact, and integrity — whether it's media, brand partnerships, technology research, or speaking engagements.
          </p>
        </div>
        <div className="mb-8">
          <a href="https://wa.me/447944958815" target="_blank" rel="noopener noreferrer" className="inline-block rounded-2xl bg-blue-600/30 backdrop-blur-md px-6 py-3 text-white font-semibold transition transform hover:bg-blue-600/50 hover:scale-105">
            Chat on WhatsApp
          </a>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Email</h3>
            <p className="text-gray-400"><a href="mailto:contact@ahhveedaa.com" className="hover:text-gray-300 transition-colors">contact@ahhveedaa.com</a></p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Social</h3>
            <p className="text-gray-400">Coming soon</p>
          </div>
        </div>
        
        {/* submission window */}
        <div className="mt-16 bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Submission Window</h2>
          <p className="text-gray-400">
            Email proposals to: <a href="mailto:avidabuyombo1@gmail.com" className="hover:text-gray-300 transition-colors">avidabuyombo1@gmail.com</a>
          </p>
        </div>
      </div>
    </main>
  )
}
