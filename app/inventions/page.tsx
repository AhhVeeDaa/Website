export default function Inventions() {
  return (
    <main className="flex min-h-screen flex-col items-start px-8 py-24">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold mb-16 tracking-tight">Inventions</h1>
        
        <div className="space-y-12">
          <div className="border border-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-3 text-gray-200">Advanced Visual Digitiser (AVD)</h2>
            <p className="text-gray-500">Proprietary architecture in development.</p>
          </div>

          <div className="border border-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-3 text-gray-200">Ubuntu.io</h2>
            <p className="text-gray-500">Decentralised creative infrastructure. Private development.</p>
          </div>

          <div className="border border-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-3 text-gray-200">Future Systems</h2>
            <p className="text-gray-500">Additional frameworks under private development.</p>
          </div>
        </div>
      </div>
    </main>
  )
}