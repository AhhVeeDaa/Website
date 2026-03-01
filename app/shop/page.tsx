export default function Shop() {
  const products = [
    {
      title: "AVD NFT Acrylic Wall Panel",
      description: "Limited edition acrylic wall panel featuring the AVD NFT artwork. Premium quality, museum-grade acrylic.",
      url: "https://ahhveedaa.etsy.com/uk/listing/1373729875/avd-nft-acrylic-wall-panel",
      status: "Available",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-start px-8 py-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Shop</h1>
        <p className="text-gray-500 mb-16">Limited editions. Proprietary designs.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {products.map((product, idx) => (
            <a
              key={idx}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-800 rounded-xl p-8 hover:border-purple-500/50 hover:bg-gray-900/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-purple-400/80">{product.status}</span>
                <span className="text-gray-600 text-xs group-hover:text-gray-400 transition-colors">↗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3 group-hover:text-purple-400 transition-colors">{product.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>
            </a>
          ))}
        </div>

        <div className="mt-24 border-t border-gray-800 pt-12">
          <p className="text-gray-600 text-sm">
            All products ship internationally via Etsy. For bulk or custom orders, <a href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">contact directly</a>.
          </p>
        </div>
      </div>
    </main>
  )
}