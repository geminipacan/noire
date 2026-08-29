# NOIRÉ Skin — Implementation Kickstart

A premium, dark, editorial single-page website for a fictional skincare brand,
built so it can be extended later without re-planning the architecture.

- **Brand:** NOIRÉ Skin
- **Tagline:** Less noise. Better skin.
- **Primary goal:** Sell the products. One CTA wording everywhere: **“Shop Now”**.
- **Type:** Frontend-only prototype. No auth, database, CMS, or checkout backend.

---

## 1. Tech stack & technical decisions

| Concern            | Choice                                                        |
| ------------------ | ------------------------------------------------------------- |
| Framework          | Next.js 16 (App Router, RSC by default)                       |
| Language           | TypeScript                                                    |
| Styling            | Tailwind CSS v4 (`@theme inline` in `app/globals.css`)        |
| UI primitives      | shadcn/ui (`base-nova` style, built on `@base-ui/react`)      |
| Icons              | `lucide-react`                                                |
| Fonts              | Geist (sans) + Geist Mono (mono) via `next/font/google`       |
| Analytics          | `@vercel/analytics` (production only)                         |
| State management   | None — a single React Context for the shop modal only         |

Decisions worth remembering:

- **Server Components by default.** Only files that need interactivity are
  marked `'use client'` (header, footer, reveal, shop modal, shop button,
  contact form).
- **No global state library.** The only shared client state is “is the shop
  modal open”, handled by a lightweight context (`ShopModalProvider`).
- **Files kept short** (well under ~600 lines) and split by responsibility so
  sections can be edited independently.
- Placeholder content (copy, prices, testimonials, FAQ) lives close to where
  it renders, and product data is centralized in `lib/products.ts` so it can be
  swapped for a real source later.

---

## 2. Final file structure

```
app/
  layout.tsx                      # Fonts, metadata/SEO, ShopModalProvider, <html> bg
  globals.css                     # Theme tokens, glass utilities, reveal animation
  page.tsx                        # Home: composes all sections + JSON-LD
  contact/page.tsx                # Contact page (form + brand details)
  privacy/page.tsx                # Placeholder legal page
  terms/page.tsx                  # Placeholder legal page

components/
  site/
    header.tsx                    # Sticky header + responsive burger menu
    hero.tsx                      # Two-column hero
    benefits.tsx                  # 4 benefit columns
    featured-products.tsx         # 3 product cards
    results.tsx                   # Stats / social proof
    testimonials.tsx              # 3 testimonials
    faq.tsx                       # Accordion FAQ
    final-cta.tsx                 # Closing conversion section
    footer.tsx                    # Minimal footer + back-to-top
    section.tsx                   # <Section> + <SectionHeading> primitives
    reveal.tsx                    # IntersectionObserver scroll-reveal wrapper
    contact-form.tsx              # Contact form (local success state, no email)
  shop/
    shop-modal-provider.tsx       # Context + the shared shop/product modal
    shop-now-button.tsx           # The single "Shop Now" conversion button
  ui/                             # shadcn components: button, accordion, dialog

lib/
  products.ts                     # Product catalogue (id, name, copy, price, image)
  utils.ts                        # cn() helper (shadcn default)

public/images/
  hero-product.png                # Hero visual
  product-cleanser.png            # Product 1
  product-serum.png               # Product 2
  product-cream.png               # Product 3
```

---

## 3. Page structure (home)

Sections render in exactly this order in `app/page.tsx`:

1. **Header** — sticky, transparent → blurred on scroll.
2. **Hero** — eyebrow, headline, copy, Shop Now, trust line + product visual.
3. **Benefits** — 4 columns in a bordered grid.
4. **Featured Products** (`id="products"`) — 3 editorial product cards.
5. **Results** (`id="results"`) — 3 large stats on a `bg-card` surface.
6. **Testimonials** — 3 glass cards.
7. **FAQ** (`id="faq"`) — two-column heading + shadcn Accordion.
8. **Final CTA** — centered closing conversion moment.
9. **Footer** — brand, back-to-top, Shop Now, legal links.

---

## 4. Styling approach

- **Palette (dark theme, 3–5 colors):**
  - Background `#000000`, secondary surfaces `#0A0A0A` / `#111111`
  - Primary text `#F5F5F5`, muted text `#A1A1A1`
  - Borders = white at very low opacity (`rgba(255,255,255,0.08)`)
  - **Accent = `--primary` (`#F5F5F5`)** → white CTA surface with black text,
    used consistently for every Shop Now button.
- **Tokens** are defined once in `app/globals.css` (`:root`) and mapped through
  `@theme inline`. Components use semantic classes (`bg-card`,
  `text-muted-foreground`, `border-border`) — never hardcoded colors.
- **Glass effect:** `.glass` (subtle white gradient + `backdrop-filter: blur`)
  and `.glass-hover` (border/background lift on hover) power cards and modal.
- **Typography:** Geist for everything; Geist Mono for small eyebrow/label text
  (uppercase, letter-spaced). Body uses `leading-relaxed`. Headings are large,
  medium weight, tight tracking, with `text-balance`/`text-pretty`.
- **Layout:** full-width sections, centered `1280px` container via the
  `container-page` utility; generous vertical rhythm (`py-20 → py-36`).

> Note: color contrast was implemented per the brand spec (near-white on black)
> and has not been formally audited — revisit if adjustments are needed.

---

## 5. Responsive behaviour

Mobile-first, intentionally re-composed (not a shrunk desktop):

- **Header:** full nav + Shop Now on `md+`; on mobile a burger toggles a
  full-height blurred overlay with tap-friendly links and a full-width CTA.
  Body scroll locks while the menu is open.
- **Hero:** two columns on `lg+`; single column on mobile with the product image
  below the text.
- **Benefits:** 4 → 2 → 1 columns.
- **Products / Testimonials:** 3 → 2 → 1 columns.
- **Stats:** one row on `sm+`, stacked on mobile.
- Horizontal overflow prevented; spacing reduced but kept generous on smaller
  screens.

Verified in-browser at 1280×800 and 390×844.

---

## 6. Animations & interactions

- **Smooth scrolling** via `scroll-behavior: smooth` + `scroll-padding-top`
  for the sticky header; anchor links (`/#products`, `/#results`, `/#faq`).
- **Scroll reveals:** `<Reveal>` uses an IntersectionObserver to add
  `.is-visible`, fading/translating content in with a small stagger (`delay`).
- **Hover:** subtle button opacity/translate; product image scale on card hover;
  glass border lift.
- **FAQ:** shadcn Accordion open/close animation.
- **Header:** transparent → `backdrop-blur` + border on scroll.
- All motion is fast, and **`prefers-reduced-motion` is respected** (reveals and
  smooth scroll disabled).

Explicitly avoided: particles, heavy parallax, animated gradients,
scroll-jacking, carousels.

---

## 7. Assets

- 4 generated premium cosmetics images in `public/images/` (placeholders that
  can be replaced later): hero composition, cleanser, serum, cream — all on dark
  studio backgrounds with neutral/black/glass packaging.
- Images use `next/image` with `fill` + `sizes`; hero image is `priority`.

---

## 8. CTA / modal behaviour

- **Single CTA:** every conversion button is `<ShopNowButton>`, wording fixed to
  “Shop Now”. Navigation links are separate and don’t count as CTAs.
- **Shop modal:** `ShopModalProvider` (mounted in `layout.tsx`) exposes
  `useShopModal()`. Any Shop Now button opens the shared dialog, which lists the
  three products with prices and an “Add routine” action (no-op placeholder — no
  cart/checkout yet).
- **Contact:** `/contact` route with a form that shows a local success state.
  **No email integration** (prototype).
- **Back to Top:** footer button uses `window.scrollTo({ behavior: 'smooth' })`
  (falls back to `auto` under reduced motion).

---

## 9. Routes

| Route       | Purpose                                              |
| ----------- | ---------------------------------------------------- |
| `/`         | Main single-page site (all 9 sections)               |
| `/contact`  | Contact page for the brand (form + details)          |
| `/privacy`  | Placeholder Privacy Policy                           |
| `/terms`    | Placeholder Terms of Service                         |
| `/#products`, `/#results`, `/#faq` | In-page anchors for nav      |

---

## 10. SEO approach

- `metadata` in `app/layout.tsx`: title template, description, keywords,
  `metadataBase`, canonical, Open Graph + Twitter cards (hero image), robots.
- Per-page `metadata` on `/contact`, `/privacy`, `/terms` with canonicals.
- `viewport` sets dark `colorScheme` + `themeColor` `#000000`.
- Semantic HTML: one `<h1>` per page, `<main>`, `<header>`, `<footer>`,
  `<nav aria-label>`, `<figure>`/`<figcaption>` for testimonials, `alt` text on
  all images, `sr-only` labels where needed.
- **JSON-LD** (`Brand` + product `Offer`s) injected on the home page.
- Fonts loaded with `display: 'swap'`.

---

## 11. Extending later (handoff notes)

- **Add/edit products:** update `lib/products.ts` — cards, modal, and JSON-LD
  read from it (JSON-LD offers in `page.tsx` are currently listed explicitly;
  wire them to `products` when prices become dynamic).
- **Real checkout:** replace the placeholder action in `shop-modal-provider.tsx`
  (e.g. integrate Stripe) — the CTA plumbing already routes every button here.
- **Contact email:** swap the local success handler in `contact-form.tsx` for a
  Server Action / route handler.
- **New sections:** compose a new `components/site/*` file using `<Section>` /
  `<SectionHeading>` and `<Reveal>`, then add it to `app/page.tsx`.
- **Legal copy:** replace placeholder text in `/privacy` and `/terms`.
```
