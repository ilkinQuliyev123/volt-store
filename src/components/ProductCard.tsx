import Link from 'next/link'
import { money, type Product } from '@/lib/data'
import AddToCart from './AddToCart'

export default function ProductCard({ p }: { p: Product }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 transition hover:shadow-md">
      <Link href={`/product/${p.id}`} className="flex aspect-square items-center justify-center rounded-xl bg-slate-50 text-6xl">
        {p.icon}
      </Link>
      <Link href={`/product/${p.id}`} className="mt-3 line-clamp-2 min-h-10 text-sm font-medium hover:text-orange-500">
        {p.name}
      </Link>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-lg font-bold">{money(p.price)}</span>
        {p.old && <span className="text-sm text-slate-400 line-through">{money(p.old)}</span>}
      </div>
      <AddToCart id={p.id} className="mt-3 py-2 text-sm" />
    </div>
  )
}
