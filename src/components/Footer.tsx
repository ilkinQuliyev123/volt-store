import { Zap } from 'lucide-react'
import Link from 'next/link'
import { categories } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm sm:grid-cols-3">
        <div>
          <p className="flex items-center gap-1 text-lg font-bold"><Zap className="size-5 fill-orange-500 text-orange-500" /> Volt</p>
          <p className="mt-3 max-w-xs text-slate-500">Electronics for everyday life: phones, laptops, TVs, audio, home appliances and gaming.</p>
        </div>
        <div>
          <p className="font-semibold">Shop</p>
          <ul className="mt-3 space-y-2 text-slate-500">
            {categories.map((c) => (
              <li key={c.id}><Link href={`/catalog?cat=${c.id}`} className="hover:text-orange-500">{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Customer care</p>
          <ul className="mt-3 space-y-2 text-slate-500">
            <li>Free delivery over $100</li>
            <li>14-day returns</li>
            <li>2-year warranty</li>
          </ul>
        </div>
      </div>
      <p className="border-t border-slate-100 py-4 text-center text-xs text-slate-400">
        Volt is a demo store: products are fictional and no payments are processed.
      </p>
    </footer>
  )
}
