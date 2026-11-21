import { Check, RotateCcw, ShieldCheck, Truck } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AddToCart from '@/components/AddToCart'
import ProductArt from '@/components/ProductArt'
import ProductCard from '@/components/ProductCard'
import Stars from '@/components/Stars'
import { byId, categories, discount, money, products } from '@/lib/data'

export const generateStaticParams = () => products.map((p) => ({ id: p.id }))

export default async function ProductPage({ params }: PageProps<'/product/[id]'>) {
  const p = byId((await params).id)
  if (!p) notFound()
  const cat = categories.find((c) => c.id === p.cat)
  const related = products.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 4)
  const off = discount(p)

  return (
    <div className="space-y-10">
      <div>
        <p className="mb-4 text-sm text-slate-500">
          <Link href="/catalog" className="hover:text-orange-500">Catalog</Link> / <Link href={`/catalog?cat=${p.cat}`} className="hover:text-orange-500">{cat?.name}</Link>
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <ProductArt kind={p.kind} hue={p.hue} className="aspect-square w-full rounded-3xl border border-slate-200" />
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-400">{p.brand}</p>
            <h1 className="mt-1 text-2xl font-bold">{p.name}</h1>
            <Stars rating={p.rating} reviews={p.reviews} className="mt-2 text-sm" />
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-bold">{money(p.price)}</span>
              {p.old && <span className="text-lg text-slate-400 line-through">{money(p.old)}</span>}
              {off > 0 && <span className="rounded-md bg-red-500 px-2 py-0.5 text-sm font-semibold text-white">-{off}%</span>}
            </div>
            <p className={`mt-1 text-sm ${p.stock > 5 ? 'text-green-600' : 'text-amber-600'}`}>
              {p.stock > 5 ? 'In stock' : `Only ${p.stock} left`}
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {p.specs.slice(0, 4).map(([k, v]) => (
                <li key={k} className="flex items-center gap-2"><Check className="size-4 text-orange-500" />{k}: {v}</li>
              ))}
            </ul>
            <AddToCart id={p.id} className="mt-6 w-full py-3 sm:w-auto sm:px-12" />
            <div className="mt-6 grid gap-2 border-t border-slate-200 pt-5 text-sm text-slate-600">
              <p className="flex items-center gap-2"><Truck className="size-4" /> Free delivery over $100</p>
              <p className="flex items-center gap-2"><RotateCcw className="size-4" /> 14-day returns</p>
              <p className="flex items-center gap-2"><ShieldCheck className="size-4" /> 2-year warranty</p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <h2 className="mb-3 text-xl font-bold">Specifications</h2>
        <dl className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white text-sm">
          {p.specs.map(([k, v]) => (
            <div key={k} className="grid grid-cols-2 px-5 py-3 sm:grid-cols-[220px_1fr]">
              <dt className="text-slate-500">{k}</dt>
              <dd className="font-medium">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {related.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-bold">You may also like</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{related.map((r) => <ProductCard key={r.id} p={r} />)}</div>
        </section>
      )}
    </div>
  )
}
