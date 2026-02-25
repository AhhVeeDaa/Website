export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-black/80 backdrop-blur px-8 py-4">
      <h1 className="text-xl font-bold">AhhVeeDaa</h1>
      <ul className="flex gap-8">
        <li><a href="/" className="hover:text-gray-300">Home</a></li>
        <li><a href="/about" className="hover:text-gray-300">About</a></li>
        <li><a href="/work" className="hover:text-gray-300">Work</a></li>
        <li><a href="/inventions" className="hover:text-gray-300">Inventions</a></li>
        <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  )
}
