import './globals.css';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://ahhveedaa.com'),
  applicationName: 'AhhVeeDaa',
  title: {
    default: 'AhhVeeDaa — Creative Technologist & Media Architect',
    template: '%s | AhhVeeDaa',
  },
  description:
    'Creative technologist and media architect building across media, sound, literature and technology.',
  keywords: [
    'AhhVeeDaa',
    'Creative Technologist',
    'Media Architect',
    'Creative Technology',
    'Media Architecture',
    'Music and Sound',
    'Writing and Publishing',
    'Experimental Technology',
  ],
  authors: [{ name: 'Avida Buyombo', url: 'https://ahhveedaa.com' }],
  creator: 'AhhVeeDaa',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://ahhveedaa.com',
    siteName: 'AhhVeeDaa',
    title: 'AhhVeeDaa — Creative Technologist & Media Architect',
    description:
      'Creative technologist and media architect building across media, sound, literature and technology.',
  },
  twitter: {
    card: 'summary',
    title: 'AhhVeeDaa — Creative Technologist & Media Architect',
    description:
      'Creative technologist and media architect building across media, sound, literature and technology.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Avida Buyombo',
                alternateName: 'AhhVeeDaa',
                jobTitle: 'Creative Technologist',
                url: 'https://ahhveedaa.com',
                description:
                  'Creative technologist and media architect working across sound, narrative, technology and systems design.',
                sameAs: [
                  'https://instagram.com/ahhveedaa',
                  'https://soundcloud.com/ahhveedaa',
                  'https://www.linkedin.com/in/avida-buyombo-40b235115/',
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'AhhVeeDaa',
                url: 'https://ahhveedaa.com',
                description:
                  'Creative technologist and media architect building across media, sound, literature and technology.',
              },
            ]),
          }}
        />
      </head>
      <body className="text-white min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}