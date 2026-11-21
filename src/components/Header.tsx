'use client'
import Link from 'next/link'
import { useCart } from '@/lib/cart'
import { categories } from '@/lib/data'

export default function Header() {
  const { count } = useCart()
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-orange-500">⚡</span> Volt
        </Link>
        <form action="/catalog" className="flex-1">
          <input
            name="q"
            placeholder="Search products…"
            className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none focus:border-orange-400"
          />
        </form>
        <Link href="/cart" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium hover:border-orange-400">
          Cart
          {count > 0 && <span className="ml-2 rounded-full bg-orange-500 px-2 py-0.5 text-xs text-white">{count}</span>}
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
