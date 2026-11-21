import Link from 'next/link'
import { Suspense } from 'react'
import ProductCard from '@/components/ProductCard'
import { brands, categories, products } from '@/lib/data'

const sorts = { popular: 'Popular', asc: 'Price: low to high', desc: 'Price: high to low', rating: 'Top rated' } as const

export default function Catalog({ searchParams }: PageProps<'/catalog'>) {
  return (
    <Suspense>
      <Results searchParams={searchParams} />
    </Suspense>
  )
}

async function Results({ searchParams }: Pick<PageProps<'/catalog'>, 'searchParams'>) {
  const sp = await searchParams
  const all = (k: string) => [sp[k]].flat().filter((v): v is string => !!v)
  const one = (k: string) => all(k)[0] ?? ''
  const cat = one('cat'), q = one('q').trim().toLowerCase(), sort = one('sort') || 'popular'
  const picked = all('brand'), min = Number(one('min')) || 0, max = Number(one('max')) || Infinity, sale = one('sale') === '1'

  const list = products
    .filter((p) => (!cat || p.cat === cat) && (!q || `${p.name} ${p.brand}`.toLowerCase().includes(q)))
    .filter((p) => (!picked.length || picked.includes(p.brand)) && p.price >= min && p.price <= max && (!sale || p.old))
    .sort((a, b) => (sort === 'asc' ? a.price - b.price : sort === 'desc' ? b.price - a.price : sort === 'rating' ? b.rating - a.rating : b.reviews - a.reviews))

  const href = (o: Record<string, string>) => {
    const u = new URLSearchParams()
    const base: Record<string, string> = { cat, q: one('q'), sort, min: one('min'), max: one('max'), sale: sale ? '1' : '', ...o }
    Object.entries(base).forEach(([k, v]) => v && u.set(k, v))
    picked.forEach((b) => u.append('brand', b))
    return `/catalog?${u}`
  }
  const field = 'w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm outline-none focus:border-orange-400'

  return (
    <div className="grid gap-6 md:grid-cols-[230px_1fr]">
      <aside className="space-y-6 text-sm">
        <div className="space-y-1">
          <h2 className="mb-2 font-semibold">Categories</h2>
          {[{ id: '', name: 'All products' }, ...categories].map((c) => (
            <Link key={c.id} href={href({ cat: c.id })} className={`block rounded-lg px-3 py-2 ${cat === c.id ? 'bg-orange-100 font-medium text-orange-700' : 'hover:bg-slate-100'}`}>
              {c.name}
            </Link>
          ))}
        </div>
        <form action="/catalog" className="space-y-5">
          {cat && <input type="hidden" name="cat" value={cat} />}
          {one('q') && <input type="hidden" name="q" value={one('q')} />}
          <input type="hidden" name="sort" value={sort} />
          <fieldset>
            <legend className="mb-2 font-semibold">Brand</legend>
            <div className="space-y-1.5">
              {brands.map((b) => (
                <label key={b} className="flex items-center gap-2">
                  <input type="checkbox" name="brand" value={b} defaultChecked={picked.includes(b)} className="accent-orange-500" /> {b}
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-2 font-semibold">Price ($)</legend>
            <div className="flex gap-2">
              <input name="min" type="number" min="0" placeholder="Min" defaultValue={one('min')} aria-label="Minimum price" className={field} />
              <input name="max" type="number" min="0" placeholder="Max" defaultValue={one('max')} aria-label="Maximum price" className={field} />
            </div>
          </fieldset>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="sale" value="1" defaultChecked={sale} className="accent-orange-500" /> On sale only
          </label>
          <div className="flex gap-2">
            <button className="flex-1 rounded-full bg-slate-900 py-2 font-semibold text-white hover:bg-slate-700">Apply filters</button>
            <Link href={cat ? `/catalog?cat=${cat}` : '/catalog'} className="rounded-full border border-slate-200 px-4 py-2 hover:border-orange-400">Reset</Link>
          </div>
        </form>
      </aside>

      <section>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-sm">
          <p className="text-slate-500">
            {list.length} product{list.length === 1 ? '' : 's'}
            {one('q') && <> for “{one('q')}”</>}
          </p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(sorts).map(([k, label]) => (
              <Link key={k} href={href({ sort: k })} className={`rounded-full border px-3 py-1 ${sort === k ? 'border-orange-400 text-orange-600' : 'border-slate-200 hover:border-slate-300'}`}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        {list.length ? (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {list.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        ) : (
          <p className="py-16 text-center text-slate-500">No products found. Try changing the filters.</p>
        )}
      </section>
    </div>
  )
}
