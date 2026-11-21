import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check } from 'lucide-react'
import AddToCart from '@/components/AddToCart'
import { byId, categories, money, products } from '@/lib/data'

export const generateStaticParams = () => products.map((p) => ({ id: p.id }))

export default async function ProductPage({ params }: PageProps<'/product/[id]'>) {
  const p = byId((await params).id)
  if (!p) notFound()
  const cat = categories.find((c) => c.id === p.cat)

  return (
    <div>
      <p className="mb-4 text-sm text-slate-500">
        <Link href="/catalog" className="hover:text-orange-500">Catalog</Link> / <Link href={`/catalog?cat=${p.cat}`} className="hover:text-orange-500">{cat?.name}</Link>
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex aspect-square items-center justify-center rounded-3xl border border-slate-200 bg-white text-9xl">{p.icon}</div>
        <div>
          <h1 className="text-2xl font-bold">{p.name}</h1>
          <div className="mt-3 flex items-baseline gap-3">
            <span className="text-3xl font-bold">{money(p.price)}</span>
            {p.old && <span className="text-lg text-slate-400 line-through">{money(p.old)}</span>}
          </div>
          <p className="mt-1 text-sm text-green-600">In stock · free delivery</p>
          <ul className="mt-6 space-y-2 text-sm">
            {p.specs.map((s) => (
              <li key={s} className="flex gap-2"><Check className="size-4 text-orange-500" />{s}</li>
            ))}
          </ul>
          <AddToCart id={p.id} className="mt-8 w-full py-3 sm:w-auto sm:px-12" />
        </div>
      </div>
    </div>
  )
}
