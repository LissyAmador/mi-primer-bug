import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display-family',
})

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body-family',
})

export const metadata = {
  title: 'Creando tu primer BUG · Aurora STEAM GT',
  description: 'De la duda a la luz: tu metamorfosis en la tecnología. Taller de Aurora STEAM GT.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-night text-[#fff7ea] antialiased">{children}</body>
    </html>
  )
}
