import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TrackVest - Track Your Asset Portfolio',
  description: 'Track and monitor your valuable assets including watches and sneakers. Stay updated with real-time market prices.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
