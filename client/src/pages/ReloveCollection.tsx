// ==========================================================================
// Relove Soul Finds — Dedicated Collection Page
// Vintage & upcycled finds — a sub-brand of FeLAÁ Boutique
// ==========================================================================

import { useEffect } from 'react';
import { ArrowRight, Recycle, Heart, Sparkles, Package } from 'lucide-react';
import { Link } from 'wouter';
import { CATEGORIES, getFeaturedProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

const PAGE_TITLE = 'Relove Soul Finds — Vintage & Upcycled Finds | FeLAÁ Boutique';
const PAGE_DESC = 'Soulful collectibles, upcycled art and apparel, vintage clothing, and handcrafted furniture. Each piece carries a past — and a future. Shop Relove Soul Finds at FeLAÁ Boutique.';

const PILLARS = [
  {
    icon: Recycle,
    label: 'Preservation',
    body: 'We extend the life of objects that still have much to give — chosen for their craft, character, and the care that went into them.',
  },
  {
    icon: Heart,
    label: 'Exchange',
    body: 'Each transaction is an act of trust. These pieces pass from one custodian to the next, carrying their story forward.',
  },
  {
    icon: Sparkles,
    label: 'Recycling',
    body: 'Some pieces are reimagined entirely — materials transformed, new purpose found, the past honoured in a new form.',
  },
  {
    icon: Package,
    label: 'Transformation',
    body: 'Reworked furniture, upcycled garments, art made from artefact — transformation is the highest form of material respect.',
  },
];

// Only show categories that belong to the Relove universe (not jewelry placeholder)
const RELOVE_CATEGORIES = ['clothing', 'collectibles', 'art', 'furniture'];

export default function ReloveCollection() {
  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    document.title = PAGE_TITLE;
    document.querySelector('meta[name="description"]')?.setAttribute('content', PAGE_DESC);
    return () => {
      document.title = prevTitle;
      document.querySelector('meta[name="description"]')?.setAttribute('content', prevDesc);
    };
  }, []);

  const featured = getFeaturedProducts().slice(0, 4);
  const reloveCategories = CATEGORIES.filter(c => RELOVE_CATEGORIES.includes(c.id));

  return (
    <div className="min-h-screen pb-20">

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ height: '420px' }}>
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663721448837/Tiz4gBHdGyBwEgDj9BYoTS/hero-banner-3jgP238RW3WaCGjynGDEQF.webp"
          alt="Relove Soul Finds — vintage & upcycled treasures"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, oklch(0.22 0.04 40 / 0.75) 0%, oklch(0.22 0.04 40 / 0.1) 60%, transparent 100%)' }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-4 text-center">
          <p
            className="text-xs uppercase tracking-[0.25em] mb-3"
            style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.72 0.14 80)' }}
          >
            ✦ Treasures with a past
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-3"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            ReLove{' '}
            <em
              className="not-italic"
              style={{ color: 'oklch(0.72 0.14 80)' }}
            >
              Soul
            </em>{' '}
            Finds
          </h1>
          <p
            className="text-white/80 max-w-xl text-sm md:text-base"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Soulful collectibles, upcycled art & apparel, vintage clothing, and handcrafted furniture — loved into the future.
          </p>
          <Link
            href="/shop"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-200 hover:gap-3"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              background: 'oklch(0.55 0.14 38)',
              color: 'oklch(0.97 0.02 85)',
              border: '2px solid oklch(0.72 0.14 80)',
            }}
          >
            Shop the Collection <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── OPENING STATEMENT ──────────────────────────────────────────── */}
      <section
        className="py-14 px-4"
        style={{ background: 'oklch(0.97 0.02 85)' }}
      >
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-4"
            style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.55 0.14 38)' }}
          >
            An Extension of FeLAA Atelier
          </p>
          <blockquote
            className="text-2xl md:text-3xl font-bold leading-snug mb-8 pl-5"
            style={{
              fontFamily: 'Fraunces, serif',
              color: 'oklch(0.22 0.04 40)',
              borderLeft: '4px solid oklch(0.55 0.14 38)',
            }}
          >
            "Nothing begins as 'blank'. Every material carries the memory of its making, its use, and the hands that passed it on."
          </blockquote>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.45 0.04 55)' }}
          >
            Relove Soul Finds is our curated market of objects with a past. Sourced with intention, each piece is assessed for its craft, character, and capacity to continue being meaningful — then offered to a new custodian. We do not sell things. We facilitate stewardship.
          </p>
        </div>
      </section>

      {/* ── CATEGORY TILES ─────────────────────────────────────────────── */}
      <section
        className="py-12 px-4"
        style={{ background: 'oklch(0.94 0.03 80)' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-1"
                style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.55 0.14 38)' }}
              >
                Browse by category
              </p>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
              >
                What We Offer
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden sm:flex items-center gap-1 text-sm font-medium transition-all duration-150 hover:gap-2"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.55 0.14 38)' }}
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {reloveCategories.map((cat) => (
              <Link key={cat.id} href={`/shop?category=${cat.id}`}>
                <div className="group relative overflow-hidden aspect-[3/4] cursor-pointer stamp-card">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, oklch(0.22 0.04 40 / 0.85) 0%, oklch(0.22 0.04 40 / 0.2) 60%, transparent 100%)' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="text-lg mb-0.5" style={{ lineHeight: 1 }}>{cat.emoji}</div>
                    <h3
                      className="text-sm font-bold leading-tight"
                      style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.97 0.02 85)' }}
                    >
                      {cat.label}
                    </h3>
                    <p
                      className="text-[10px] mt-0.5"
                      style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.72 0.14 80)' }}
                    >
                      {cat.count} items
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED FINDS ─────────────────────────────────────────────── */}
      {featured.length > 0 && (
        <section
          className="py-12 px-4"
          style={{ background: 'oklch(0.22 0.04 40)' }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-1"
                  style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.72 0.14 80)' }}
                >
                  Hand-picked
                </p>
                <h2
                  className="text-3xl font-bold"
                  style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.97 0.02 85)' }}
                >
                  Featured Finds
                </h2>
              </div>
              <Link
                href="/shop"
                className="hidden sm:flex items-center gap-1 text-sm font-medium transition-all duration-150 hover:gap-2"
                style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.72 0.14 80)' }}
              >
                See all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {featured.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── MATERIAL PHILOSOPHY PILLARS ────────────────────────────────── */}
      <section
        className="py-14 px-4"
        style={{ background: 'oklch(0.97 0.02 85)' }}
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-2"
            style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.55 0.14 38)' }}
          >
            A Material Philosophy
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-10"
            style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
          >
            Four Principles of Stewardship
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {PILLARS.map(({ icon: Icon, label, body }) => (
              <div
                key={label}
                className="p-6"
                style={{
                  background: 'oklch(0.94 0.03 80)',
                  border: '1.5px solid oklch(0.85 0.04 70)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={20} style={{ color: 'oklch(0.55 0.14 38)' }} strokeWidth={1.6} />
                  <h3
                    className="text-lg font-bold"
                    style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
                  >
                    {label}
                  </h3>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.45 0.04 55)' }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* Manifesto block */}
          <div
            className="p-8 mb-10"
            style={{
              background: 'oklch(0.22 0.04 40)',
              border: '2px solid oklch(0.35 0.05 40)',
            }}
          >
            <p
              className="text-xs uppercase tracking-[0.2em] mb-6"
              style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.72 0.14 80)' }}
            >
              We believe —
            </p>
            {[
              'That every object carries the memory of its making.',
              'That beauty does not require newness.',
              'That care is the most radical act of consumption.',
              'That a thing well-loved is never truly lost.',
            ].map(line => (
              <p
                key={line}
                className="text-lg md:text-xl font-bold mb-3 last:mb-0"
                style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.97 0.02 85)' }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────── */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: 'oklch(0.94 0.03 80)', borderTop: '2px solid oklch(0.85 0.04 70)' }}
      >
        <div className="max-w-xl mx-auto">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-3"
            style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.55 0.14 38)' }}
          >
            ✦ FeLAÁ Boutique
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
          >
            Find your next treasure
          </h2>
          <p
            className="text-sm mb-8"
            style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.45 0.04 55)' }}
          >
            Each piece is one of a kind. When it's gone, it's gone.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-sm transition-all duration-200 hover:gap-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'oklch(0.55 0.14 38)',
                color: 'oklch(0.97 0.02 85)',
                border: '2px solid oklch(0.22 0.04 40)',
              }}
            >
              Shop All Finds <ArrowRight size={16} />
            </Link>
            <Link
              href="/felaa"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-sm transition-all duration-200"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'transparent',
                color: 'oklch(0.35 0.05 40)',
                border: '2px solid oklch(0.35 0.05 40)',
              }}
            >
              Discover FeLAA Atelier
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
