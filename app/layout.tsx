import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AhhVeeDaa — Creative Technologist',
  description: 'Portfolio of AhhVeeDaa, showcasing creative technology work.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className='antialiased'>
      <body>{children}</body>
    </html>
  );
}