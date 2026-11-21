'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/lib/cart'
import { money } from '@/lib/data'

const field = 'w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-orange-400'

export default function Checkout() {
  const { total, count, clear } = useCart()
  const [order, setOrder] = useState<string | null>(null)

  if (order)
    return (
      <div className="py-20 text-center">
        <p className="text-5xl">✅</p>
        <h1 className="mt-4 text-2xl font-bold">Thank you for your order!</h1>
        <p className="mt-2 text-slate-500">Order {order} was placed (demo — nothing was charged).</p>
        <Link href="/" className="mt-6 inline-block rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white">Continue shopping</Link>
      </div>
    )

  if (!count)
    return (
      <p className="py-20 text-center text-slate-500">
        Your cart is empty. <Link href="/catalog" className="text-orange-500 underline">Browse products</Link>
      </p>
    )

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setOrder(`#${Math.floor(100000 + Math.random() * 900000)}`)
        clear()
      }}
      className="mx-auto grid max-w-3xl gap-6 md:grid-cols-[1fr_240px]"
    >
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <input required name="name" placeholder="Full name" className={field} />
        <input required type="email" name="email" placeholder="Email" className={field} />
        <input required type="tel" name="phone" placeholder="Phone" className={field} />
        <input required name="address" placeholder="Delivery address" className={field} />
        <select name="pay" className={field} defaultValue="card">
          <option value="card">Card on delivery</option>
          <option value="cash">Cash on delivery</option>
        </select>
      </div>
      <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 text-sm">
        <p className="text-slate-500">{count} item{count > 1 ? 's' : ''}</p>
        <p className="mt-1 text-2xl font-bold">{money(total)}</p>
        <button className="mt-4 w-full rounded-full bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600">Place order</button>
      </aside>
    </form>
  )
}
