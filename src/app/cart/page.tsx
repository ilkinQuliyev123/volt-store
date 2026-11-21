'use client'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { cartTotal, useCart } from '@/lib/cart'
import { byId, money } from '@/lib/data'

export default function Cart() {
  const lines = useCart((s) => s.lines)
  const setQty = useCart((s) => s.setQty)
  const total = cartTotal(lines)
  const items = Object.entries(lines).flatMap(([id, q]) => {
    const p = byId(id)
    return p ? [{ p, q }] : []
  })

  if (!items.length)
    return (
      <div className="py-20 text-center">
        <ShoppingCart className="mx-auto size-12 text-slate-300" strokeWidth={1.5} />
        <p className="mt-4 text-slate-500">Your cart is empty.</p>
        <Link href="/catalog" className="mt-6 inline-block rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white">Browse products</Link>
      </div>
    )

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">Cart</h1>
        {items.map(({ p, q }) => (
          <div key={p.id} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
            <span className="flex size-16 items-center justify-center rounded-xl bg-slate-50 text-3xl">{p.icon}</span>
            <div className="flex-1">
              <Link href={`/product/${p.id}`} className="text-sm font-medium hover:text-orange-500">{p.name}</Link>
              <p className="font-bold">{money(p.price)}</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <button aria-label="Decrease" onClick={() => setQty(p.id, q - 1)} className="flex size-8 items-center justify-center rounded-full border border-slate-200 hover:border-orange-400"><Minus className="size-4" /></button>
              <span className="w-5 text-center">{q}</span>
              <button aria-label="Increase" onClick={() => setQty(p.id, q + 1)} className="flex size-8 items-center justify-center rounded-full border border-slate-200 hover:border-orange-400"><Plus className="size-4" /></button>
            </div>
          </div>
        ))}
      </div>
      <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="font-semibold">Order summary</h2>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between"><dt className="text-slate-500">Subtotal</dt><dd>{money(total)}</dd></div>
          <div className="flex justify-between"><dt className="text-slate-500">Delivery</dt><dd>Free</dd></div>
          <div className="flex justify-between border-t border-slate-100 pt-3 text-base font-bold"><dt>Total</dt><dd>{money(total)}</dd></div>
        </dl>
        <Link href="/checkout" className="mt-5 block rounded-full bg-orange-500 py-3 text-center font-semibold text-white hover:bg-orange-600">Checkout</Link>
      </aside>
    </div>
  )
}
