import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Strategic enquiries only. Reach AhhVeeDaa for collaborations, commissions, and partnership opportunities across media, technology, and systems design.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | AhhVeeDaa',
    description:
      'Strategic enquiries only. Reach AhhVeeDaa for collaborations and partnership opportunities.',
    url: 'https://ahhveedaa.com/contact',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AhhVeeDaa — Contact',
      },
    ],
  },
}