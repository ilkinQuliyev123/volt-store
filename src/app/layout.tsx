import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Providers from '@/components/Providers'

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Volt — Electronics Store (demo)',
  description: 'Demo electronics store built with Next.js, TypeScript and Tailwind CSS.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        <Providers>
          <Header />
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
