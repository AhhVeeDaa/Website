import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AhhVeeDaa — Creative Technologist",
  description: "Creative Technologist & Media Architect building culture, systems, and signal across media, music, authorship and advanced technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}