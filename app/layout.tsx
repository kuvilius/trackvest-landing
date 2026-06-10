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
  title: 'TrackVest — Track the Real Value of Your Collection',
  description:
    'TrackVest tracks the live market value of everything you collect. Get real-time pricing, full price history, performance analytics and smart alerts — all in one portfolio.',
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
