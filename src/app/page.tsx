import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { categories, products } from '@/lib/data'

export default function Home() {
  const deals = products.filter((p) => p.old)
  return (
    <div className="space-y-10">
      <section className="flex flex-col items-start gap-4 rounded-3xl bg-slate-900 px-8 py-12 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-orange-400">Spring sale</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">Up to 15% off on phones, laptops and TVs</h1>
          <Link href="/catalog" className="mt-6 inline-block rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold hover:bg-orange-600">
            Shop now
          </Link>
        </div>
        <div className="text-8xl" aria-hidden>
          ⚡
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((c) => (
          <Link
            key={c.id}
            href={`/catalog?cat=${c.id}`}
            className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white py-5 text-sm font-medium transition hover:border-orange-400"
          >
            <span className="text-3xl">{c.icon}</span>
            {c.name}
          </Link>
        ))}
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold">Deals of the week</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {deals.slice(0, 8).map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
