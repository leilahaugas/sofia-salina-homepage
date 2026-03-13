import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sofia Salina Haugas',
  description: 'Noorte Tervislikud Eluviisid — Väikesed sammud. Suur muutus. Meie moodi.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
