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
    'Creative technologist and media architect building proprietary systems across media, sound, narrative, and computation.',
  keywords: [
    'AhhVeeDaa',
    'Creative Technologist',
    'Media Architect',
    'Systems Architect',
    'Proprietary Systems',
    'Audio Systems',
    'Broadcast Architecture',
    'Experimental Technology',
    'Systems Design',
  ],
  authors: [{ name: 'AhhVeeDaa', url: 'https://ahhveedaa.com' }],
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
      'Creative technologist and media architect building proprietary systems across media, sound, narrative, and computation.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AhhVeeDaa — Creative Technologist & Media Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AhhVeeDaa — Creative Technologist & Media Architect',
    description:
      'Creative technologist and media architect building proprietary systems across media, sound, narrative, and computation.',
    images: ['/og-image.jpg'],
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
                name: 'AhhVeeDaa',
                jobTitle: 'Creative Technologist',
                url: 'https://ahhveedaa.com',
                description:
                  'Creative technologist and media architect operating across sound, narrative, and systems design.',
                sameAs: [],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'AhhVeeDaa',
                url: 'https://ahhveedaa.com',
                description:
                  'Creative technologist and media architect building proprietary systems across media, sound, narrative, and computation.',
              },
            ]),
          }}
        />
      </head>
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}