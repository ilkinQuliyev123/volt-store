import Link from 'next/link'
import { Suspense } from 'react'
import ProductCard from '@/components/ProductCard'
import { categories, products } from '@/lib/data'

const sorts = { new: 'Featured', asc: 'Price: low to high', desc: 'Price: high to low' } as const

export default function Catalog({ searchParams }: PageProps<'/catalog'>) {
  return (
    <Suspense>
      <Results searchParams={searchParams} />
    </Suspense>
  )
}

async function Results({ searchParams }: Pick<PageProps<'/catalog'>, 'searchParams'>) {
  const sp = await searchParams
  const one = (k: string) => (Array.isArray(sp[k]) ? sp[k][0] : sp[k]) ?? ''
  const [cat, q, sort] = [one('cat'), one('q').trim(), one('sort')]

  const list = products
    .filter((p) => (!cat || p.cat === cat) && p.name.toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => (sort === 'asc' ? a.price - b.price : sort === 'desc' ? b.price - a.price : 0))

  const href = (o: Record<string, string>) => `/catalog?${new URLSearchParams({ cat, q, sort, ...o }).toString()}`

  return (
    <div className="grid gap-6 md:grid-cols-[200px_1fr]">
      <aside className="space-y-1 text-sm">
        <h2 className="mb-2 font-semibold">Categories</h2>
        {[{ id: '', name: 'All products' }, ...categories].map((c) => (
          <Link key={c.id} href={href({ cat: c.id })} className={`block rounded-lg px-3 py-2 ${cat === c.id ? 'bg-orange-100 font-medium text-orange-700' : 'hover:bg-slate-100'}`}>
            {c.name}
          </Link>
        ))}
      </aside>
      <section>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-sm">
          <p className="text-slate-500">
            {list.length} product{list.length === 1 ? '' : 's'}
            {q && <> for “{q}”</>}
          </p>
          <div className="flex gap-2">
            {Object.entries(sorts).map(([k, label]) => (
              <Link key={k} href={href({ sort: k })} className={`rounded-full border px-3 py-1 ${(sort || 'new') === k ? 'border-orange-400 text-orange-600' : 'border-slate-200'}`}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        {list.length ? (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {list.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-slate-500">No products found.</p>
        )}
      </section>
    </div>
  )
}
