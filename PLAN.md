# Volt Store — Project & Functionality Plan

## 1. Project plan
**Goal:** a realistic electronics e-commerce storefront for the Upwork portfolio. Layout follows the structure of a large regional electronics retailer (to be confirmed from the owner's reference screenshots — the reference site blocks bots). Original brand, colors, copy.

**Audience:** freelance clients judging craft: responsive UI, clean code, real shop flows.

**Stack (latest):** Next.js 16 (App Router, Cache Components) · React 19 · TypeScript · Tailwind CSS 4 · Lucide icons · Zustand (persisted cart/wishlist) · Sonner (toasts). Hosting: Netlify.

| Phase | Scope | Status |
|---|---|---|
| 0 | Plan + libraries + icon system | in progress |
| 1 | Layout per reference screenshots (header, mega menu, hero slider, sections) | blocked: need screenshots |
| 2 | Catalog depth: 40+ products, brands, specs, real photos (licensed) | todo |
| 3 | Product page: gallery, specs table, related items, stock | todo |
| 4 | Cart drawer, wishlist, compare, checkout validation | todo |
| 5 | Tests, accessibility pass, Lighthouse, deploy | todo |

## 2. Functionality plan
**Catalog:** category tree · brand filter · price range · in-stock toggle · sort (popular, price, new) · search with instant suggestions · pagination or "load more".
**Product:** image gallery · price/old price/discount badge · specs table · stock state · related products · add to cart / wishlist / compare.
**Cart:** drawer + page · quantity stepper · remove · promo code (demo) · totals · persisted in localStorage.
**Checkout:** contact + delivery form with validation · payment method select (demo) · order confirmation page with order number.
**Extras:** wishlist page · recently viewed · toasts for actions · empty/error/404 states · SEO metadata · keyboard + screen-reader friendly.
**Out of scope:** real payments, accounts, backend (demo data only).

## 3. Definition of done
Every flow passes the Playwright E2E script · no console errors · no horizontal scroll at 390 px · `npm run build` clean.
