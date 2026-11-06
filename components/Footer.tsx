'use client'

import { FaTwitter, FaFacebookF, FaSoundcloud, FaInstagram, FaSnapchatGhost, FaTwitch, FaLinkedinIn } from 'react-icons/fa'
import { SiEtsy } from 'react-icons/si'

export default function Footer() {
  const socials = [
    { href: 'https://twitter.com/AhhVeeDaa', label: 'Twitter', Icon: FaTwitter },
    { href: 'https://facebook.com/AhhVeeDaa', label: 'Facebook', Icon: FaFacebookF },
    { href: 'https://soundcloud.com/ahhveedaa', label: 'SoundCloud', Icon: FaSoundcloud },
    { href: 'https://instagram.com/ahhveedaa', label: 'Instagram', Icon: FaInstagram },
    { href: 'https://snapchat.com/add/ahhveedaa', label: 'Snapchat', Icon: FaSnapchatGhost },
    { href: 'https://twitch.tv/ahhveedaa', label: 'Twitch', Icon: FaTwitch },
    { href: 'https://uk.linkedin.com/in/avida-buyombo-40b235115?trk=public_profile_browsemap', label: 'LinkedIn', Icon: FaLinkedinIn },
    { href: 'https://ahhveedaa.etsy.com/uk', label: 'Etsy', Icon: SiEtsy }
  ]

  return (
    <footer className="border-t border-white/[0.08] bg-black/20 py-8 text-center text-gray-400">
      <div className="mb-6 flex justify-center flex-wrap gap-3 px-4">
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300/40 hover:bg-violet-500/15 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
      <div className="mb-5 flex flex-wrap justify-center gap-x-6 gap-y-2 px-4 text-xs text-white/50">
        <a href="/about" className="hover:text-white">About</a>
        <a href="/work" className="hover:text-white">Work</a>
        <a href="/inventions" className="hover:text-white">Inventions</a>
        <a href="/ventures" className="hover:text-white">Ventures</a>
        <a href="/shop" className="hover:text-white">Shop</a>
        <a href="/contact" className="hover:text-white">Contact</a>
      </div>
      <p className="text-xs">&copy; {new Date().getFullYear()} AhhVeeDaa. All rights reserved.</p>
    </footer>
  )
}