import { Metadata } from 'next';
import { RootLayout } from './components/RootLayout';

export const metadata: Metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}