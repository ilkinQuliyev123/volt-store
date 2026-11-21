import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { CartProvider } from '@/lib/cart'

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Volt — Electronics Store (demo)',
  description: 'Demo electronics store built with Next.js, TypeScript and Tailwind CSS.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        <CartProvider>
          <Header />
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">{children}</main>
          <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
            Volt is a demo store: products are fictional and no payments are processed.
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}
