import type { Metadata } from 'next';
import { Schibsted_Grotesk, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-schibsted',
  display: 'swap',
});
const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-hanken',
  display: 'swap',
});
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const SITE_URL = 'https://www.trackvest.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'TrackVest — Where Your Collection Lives',
  description:
    'TrackVest keeps track of everything you collect — watches, sneakers, trading cards, wine and more. See live market values, full price history, and how your collection is doing, all in one place.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  icons: { icon: '/assets/logo-icon.png', apple: '/assets/logo-icon.png' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${schibsted.variable} ${hanken.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
