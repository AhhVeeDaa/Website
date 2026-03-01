import './globals.css';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AhhVeeDaa',
  description: 'Systems architect building proprietary infrastructure across media, sound, literature and technology.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark antialiased">
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