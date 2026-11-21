# Volt Store — electronics e-commerce demo

Goal: online store modeled on the structure of a typical electronics retailer (reference: kontakt.az layout — header with search, category menu, promo hero, product grids, product page, cart, checkout). Original name and design. Portfolio piece for Upwork.

Stack: Next.js (App Router) + TypeScript + Tailwind CSS. Demo data only, payment is a mock (no real money).
Repo: github.com/ilkinQuliyev123/volt-store (public)

## Rules (from the owner — follow always)
1. **Log every change here.** After each piece of work, update "Progress" below. When resuming, read this file first and continue from "Next steps".
2. **Save tokens:** write smart, working, short code — like a senior engineer. No boilerplate, no dead code, no over-engineering.
3. **Test as you build.** Run the app and check every screen/flow works end to end before marking it done.
4. **UI:** modest, clean, not bloated, pleasant to the eye. Generous spacing, one accent color, few fonts.
5. **Stack:** TypeScript + Tailwind CSS everywhere (mobile: React Native + NativeWind).
6. **Portfolio language is English.** Public text in the repo (README) is English too.
7. **Do not copy brands/assets** of reference sites — layout inspiration only, own name and look.
8. **Model routing:** simple/mechanical tasks (scaffolding, renaming, data files, screenshots, README) go to lighter models (Agent `model: "haiku"` or `"sonnet"`); complex tasks (architecture, state logic, tricky bugs, review) go to the strongest model. Pick the lightest model that can do the job.

## Progress
- [x] Scaffold (Next 16, `cacheComponents` on: searchParams must be read inside <Suspense>; dynamic routes need generateStaticParams)
- [x] Data (src/lib/data.ts, 16 demo products, emoji icons), cart context (localStorage)
- [x] Pages: home, catalog (category/search/sort), product, cart, checkout + success
- [x] E2E test: Playwright script (scratchpad, 16 checks) all pass on production build
- [x] PLAN.md written (project + functionality plan). Libraries added: lucide-react, zustand (persisted cart, manual rehydrate in Providers), sonner (toasts). Old context cart removed. 16 E2E checks pass.
- [ ] Phase 1 layout rewrite BLOCKED until owner sends reference screenshots (kontakt.az blocks bots, do not bypass)
- [x] GitHub repo pushed
- [ ] Deployed (Netlify) + added to portfolio with screenshot
## Next steps
1. Push to GitHub (public), deploy to Netlify, add to portfolio
2. Nice-to-have: real product photos, wishlist, brand filter
- Folder sits inside the Desktop git repo: always git init inside the project folder, never git add from the parent.
