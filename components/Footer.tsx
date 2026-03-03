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
    <footer className="border-t border-gray-800 bg-black py-8 text-center text-gray-400">
      <div className="mb-4 flex justify-center flex-wrap gap-4 px-4">
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
      <p className="text-sm">&copy; 2026 AhhVeeDaa. All rights reserved.</p>
    </footer>
  )
}