'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductArt from './ProductArt'
import type { Kind } from '@/lib/data'

const slides: { tag: string; title: string; text: string; href: string; kind: Kind; hue: number; bg: string }[] = [
  { tag: 'Spring sale', title: 'Up to 15% off on phones and laptops', text: 'Flagship devices at their best prices this season.', href: '/catalog?cat=phones', kind: 'phone', hue: 22, bg: 'from-slate-900 to-slate-700' },
  { tag: 'Home cinema', title: 'Bring the cinema home with 4K and QLED', text: 'Big screens and immersive sound, delivered free.', href: '/catalog?cat=tv', kind: 'tv', hue: 250, bg: 'from-indigo-900 to-slate-800' },
  { tag: 'Smart home', title: 'Robot vacuums that clean while you relax', text: 'Lidar navigation, self-washing mops, app control.', href: '/catalog?cat=home', kind: 'vacuum', hue: 170, bg: 'from-emerald-900 to-slate-800' },
]

export default function HeroSlider() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [])
  const go = (d: number) => setI((n) => (n + d + slides.length) % slides.length)
  const s = slides[i]

  return (
    <section aria-roledescription="carousel" className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${s.bg} text-white transition-colors duration-500`}>
      <div className="grid items-center gap-6 px-8 py-10 sm:grid-cols-2 sm:px-12 sm:py-12">
        <div>
          <p className="text-sm font-medium text-orange-400">{s.tag}</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">{s.title}</h1>
          <p className="mt-3 max-w-md text-slate-300">{s.text}</p>
          <Link href={s.href} className="mt-6 inline-block rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold hover:bg-orange-600">
            Shop now
          </Link>
        </div>
        <ProductArt kind={s.kind} hue={s.hue} className="mx-auto hidden size-60 rounded-3xl sm:block" />
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, n) => (
          <button key={n} aria-label={`Slide ${n + 1}`} onClick={() => setI(n)} className={`h-2 rounded-full transition-all ${n === i ? 'w-6 bg-orange-500' : 'w-2 bg-white/40'}`} />
        ))}
      </div>
      <button aria-label="Previous slide" onClick={() => go(-1)} className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-2 hover:bg-white/20 sm:block"><ChevronLeft className="size-5" /></button>
      <button aria-label="Next slide" onClick={() => go(1)} className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-2 hover:bg-white/20 sm:block"><ChevronRight className="size-5" /></button>
    </section>
  )
}
