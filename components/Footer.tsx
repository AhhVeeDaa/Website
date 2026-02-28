export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-8 text-center text-gray-500">
      <div className="mb-4 flex justify-center flex-wrap gap-6 px-4">
        <a href="https://twitter.com/AhhVeeDaa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Twitter</a>
        <a href="https://facebook.com/AhhVeeDaa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Facebook</a>
        <a href="https://soundcloud.com/ahhveedaa" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">Soundcloud</a>
        <a href="https://instagram.com/ahhveedaa" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">Instagram</a>
        <a href="https://snapchat.com/add/ahhveedaa" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Snapchat</a>
        <a href="https://twitch.tv/ahhveedaa" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Twitch</a>
      </div>
      <p className="text-sm">&copy; 2026 AhhVeeDaa. All rights reserved.</p>
    </footer>
  )
}