import Link from 'next/link'
import { discount, money, type Product } from '@/lib/data'
import AddToCart from './AddToCart'
import ProductArt from './ProductArt'
import Stars from './Stars'

export default function ProductCard({ p }: { p: Product }) {
  const off = discount(p)
  return (
    <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-3 transition hover:shadow-lg">
      <Link href={`/product/${p.id}`} className="relative block overflow-hidden rounded-xl">
        <ProductArt kind={p.kind} hue={p.hue} className="aspect-square w-full transition group-hover:scale-105" />
        <div className="absolute left-2 top-2 flex gap-1 text-xs font-semibold">
          {off > 0 && <span className="rounded-md bg-red-500 px-2 py-0.5 text-white">-{off}%</span>}
          {p.isNew && <span className="rounded-md bg-emerald-500 px-2 py-0.5 text-white">New</span>}
        </div>
      </Link>
      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-400">{p.brand}</p>
      <Link href={`/product/${p.id}`} className="line-clamp-2 min-h-10 text-sm font-medium hover:text-orange-500">
        {p.name}
      </Link>
      <Stars rating={p.rating} reviews={p.reviews} className="mt-1" />
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-lg font-bold">{money(p.price)}</span>
        {p.old && <span className="text-sm text-slate-400 line-through">{money(p.old)}</span>}
      </div>
      <AddToCart id={p.id} className="mt-3 py-2 text-sm" />
    </div>
  )
}
