import { Cambay } from 'next/font/google'
import './globals.css'

const cambay = Cambay({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['devanagari'],
})

export const metadata = {
  title: 'Juscred',
  description: 'Precatórios e Ativos Judiciais',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={cambay.className}>{children}</body>
    </html>
  )
}
