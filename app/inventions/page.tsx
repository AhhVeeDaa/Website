export default function Inventions() {
  return (
    <main className="flex min-h-screen flex-col items-start px-8 py-24">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold mb-16 tracking-tight">Inventions</h1>

        <div className="divide-y divide-gray-800/40">
          <div className="py-8">
            <div className="border border-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-3 text-gray-200">Advanced Visual Digitiser (AVD)</h2>
              <p className="text-gray-500">Proprietary architecture in development.</p>
            </div>
          </div>

          <div className="py-8">
            <a href="https://ubuntuhub.io" target="_blank" rel="noopener noreferrer" className="block border border-gray-800 rounded-lg p-8 hover:border-purple-500/30 hover:bg-gray-900/20 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-3 text-gray-200">Ubuntu Hub</h2>
              <p className="text-gray-500">Decentralised infrastructure. Private development.</p>
            </a>
          </div>

          <div className="py-8">
            <div className="border border-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-3 text-gray-200">Future Systems</h2>
              <p className="text-gray-500">In development.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}