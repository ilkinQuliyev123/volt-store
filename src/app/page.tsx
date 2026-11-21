import { Headset, RotateCcw, ShieldCheck, Truck } from 'lucide-react'
import Link from 'next/link'
import HeroSlider from '@/components/HeroSlider'
import ProductArt from '@/components/ProductArt'
import ProductCard from '@/components/ProductCard'
import { brands, categories, discount, products } from '@/lib/data'

const perks = [
  { icon: Truck, title: 'Free delivery', text: 'On orders over $100' },
  { icon: RotateCcw, title: '14-day returns', text: 'No questions asked' },
  { icon: ShieldCheck, title: '2-year warranty', text: 'On every product' },
  { icon: Headset, title: 'Support 24/7', text: 'We are here to help' },
]

const Section = ({ title, href, children }: { title: string; href?: string; children: React.ReactNode }) => (
  <section>
    <div className="mb-4 flex items-end justify-between">
      <h2 className="text-xl font-bold">{title}</h2>
      {href && <Link href={href} className="text-sm font-medium text-orange-600 hover:underline">View all</Link>}
    </div>
    {children}
  </section>
)

const grid = 'grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'

export default function Home() {
  const deals = [...products].filter((p) => p.old).sort((a, b) => discount(b) - discount(a)).slice(0, 8)
  const fresh = products.filter((p) => p.isNew).slice(0, 4)
  return (
    <div className="space-y-10">
      <HeroSlider />

      <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {perks.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
            <Icon className="size-7 shrink-0 text-orange-500" strokeWidth={1.75} />
            <div>
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-xs text-slate-500">{text}</p>
            </div>
          </div>
        ))}
      </section>

      <Section title="Shop by category">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => (
            <Link key={c.id} href={`/catalog?cat=${c.id}`} className="group rounded-2xl border border-slate-200 bg-white p-3 text-center text-sm font-medium transition hover:border-orange-400">
              <ProductArt kind={c.kind} hue={22} className="aspect-square w-full rounded-xl transition group-hover:scale-105" />
              <span className="mt-2 block">{c.name}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Deals of the week" href="/catalog?sale=1">
        <div className={grid}>{deals.map((p) => <ProductCard key={p.id} p={p} />)}</div>
      </Section>

      <Section title="New arrivals">
        <div className={grid}>{fresh.map((p) => <ProductCard key={p.id} p={p} />)}</div>
      </Section>

      <Section title="Popular brands">
        <div className="flex flex-wrap gap-3">
          {brands.map((b) => (
            <Link key={b} href={`/catalog?brand=${b}`} className="rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold tracking-wide text-slate-600 hover:border-orange-400 hover:text-orange-600">
              {b}
            </Link>
          ))}
        </div>
      </Section>
    </div>
  )
}
