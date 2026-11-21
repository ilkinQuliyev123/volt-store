'use client'
import { Search, ShoppingCart, Zap } from 'lucide-react'
import Link from 'next/link'
import { cartCount, useCart } from '@/lib/cart'
import { categories } from '@/lib/data'

export default function Header() {
  const count = useCart((s) => cartCount(s.lines))
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="bg-slate-900 py-1.5 text-center text-xs text-slate-300">Free delivery on orders over $100 · 14-day returns</div>
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-1 text-xl font-bold tracking-tight">
          <Zap className="size-5 fill-orange-500 text-orange-500" /> Volt
        </Link>
        <form action="/catalog" className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          <input
            name="q"
            placeholder="Search products…"
            className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-orange-400"
          />
        </form>
        <Link href="/cart" className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium hover:border-orange-400">
          <ShoppingCart className="size-4" /> Cart
          {count > 0 && <span className="rounded-full bg-orange-500 px-2 py-0.5 text-xs text-white">{count}</span>}
        </Link>
      </div>
      <nav className="mx-auto flex max-w-6xl gap-5 overflow-x-auto px-4 pb-2 text-sm text-slate-600">
        {categories.map((c) => (
          <Link key={c.id} href={`/catalog?cat=${c.id}`} className="whitespace-nowrap hover:text-orange-500">
            {c.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}
