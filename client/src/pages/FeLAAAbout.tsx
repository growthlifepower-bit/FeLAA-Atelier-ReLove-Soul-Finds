// ==========================================================================
// FeLAA Atelier Page — /felaa
// Design: unified with home page — warm brutalist vintage
// ==========================================================================

import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/products';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const atelierProducts = PRODUCTS.filter(p => p.category === 'clothing').slice(0, 8);

const DISCIPLINES = [
  {
    title: 'Couture Mastery',
    desc: 'Refined finishing, disciplined handling, and garment logic built through slow, intentional repetition.',
    image: '/felaa-terrain-coord.png',
  },
  {
    title: 'Textile Intelligence',
    desc: 'Material studies shaped by tactility, depth, and the quiet architecture of cloth meeting body.',
    image: '/felaa-cosmos-duster.png',
  },
  {
    title: 'Pattern Engineering',
    desc: 'Measured transitions from sketch to structure — where proportion, movement, and memory are resolved.',
    image: '/felaa-atelier-studio.png',
  },
];

export default function FeLAAAbout() {
  return (
    <div className="min-h-screen pb-safe">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: '90vh' }}>
        <img
          src="/felaa-atelier-studio.png"
          alt="FeLAA Atelier studio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, oklch(0.22 0.04 40 / 0.88) 0%, oklch(0.22 0.04 40 / 0.5) 60%, oklch(0.22 0.04 40 / 0.2) 100%)',
          }}
        />

        <div
          className="relative container flex flex-col justify-end h-full"
          style={{ minHeight: '90vh', paddingBottom: '3.5rem' }}
        >
          <div className="max-w-xl">
            <div
              className="inline-block px-3 py-1 mb-4 text-xs uppercase tracking-widest"
              style={{
                fontFamily: 'Courier Prime, monospace',
                background: 'oklch(0.72 0.14 80)',
                color: 'oklch(0.22 0.04 40)',
                border: '1.5px solid oklch(0.22 0.04 40)',
              }}
            >
              ✦ A Symbolic Lifestyle Atelier
            </div>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] mb-5 italic"
              style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.97 0.02 85)' }}
            >
              FeLAA<br />
              <span style={{ color: 'oklch(0.72 0.14 80)' }}>Atelier</span>
            </h1>
            <p
              className="text-base sm:text-lg mb-8 max-w-sm leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.88 0.03 80)' }}
            >
              Ritual design, sonic anthropology, contemporary ancestral abstraction, spiritual folk-modernism — and clothing made to carry a story.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/shop?category=clothing"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:gap-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  background: 'oklch(0.55 0.14 38)',
                  color: 'oklch(0.97 0.02 85)',
                  border: '2px solid oklch(0.97 0.02 85)',
                }}
              >
                Shop the Collection <ArrowRight size={16} />
              </Link>
              <Link
                href="/relove-soul-finds"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  background: 'transparent',
                  color: 'oklch(0.97 0.02 85)',
                  border: '2px solid oklch(0.97 0.02 85 / 0.6)',
                }}
              >
                Discover NuMode
              </Link>
            </div>
          </div>
        </div>

        {/* Torn bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M0,20 C120,40 240,0 360,20 C480,40 600,0 720,20 C840,40 960,0 1080,20 C1200,40 1320,0 1440,20 L1440,40 L0,40 Z"
              fill="oklch(0.97 0.02 85)"
            />
          </svg>
        </div>
      </section>

      {/* ── BRAND STATEMENT ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-24" style={{ background: 'oklch(0.22 0.04 40)' }}>
        <div className="container max-w-3xl mx-auto text-center">
          <p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.72 0.14 80)' }}
          >
            The Practice
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold italic mb-8 leading-tight"
            style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.97 0.02 85)' }}
          >
            Every garment is an act<br />of ancestral memory.
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-6"
            style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.75 0.04 70)' }}
          >
            FeLAA Atelier is a design practice rooted in slow fashion and symbolic making. Each piece is designed with intention, made to your measurements, and built to outlast trend.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.65 0.04 70)' }}
          >
            We work across two expressions: <span style={{ color: 'oklch(0.72 0.14 80)' }}>FeLAA Atelier</span> — made-to-measure original designs — and <span style={{ color: 'oklch(0.72 0.14 80)' }}>FeLAA NuMode</span> — upcycled and reworked wearables that give existing materials a second, more intentional life.
          </p>
        </div>
      </section>

      {/* ── DISCIPLINES ───────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20" style={{ background: 'oklch(0.97 0.02 85)' }}>
        <div className="container">
          <div className="mb-10">
            <p
              className="text-xs uppercase tracking-widest mb-1"
              style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.55 0.14 38)' }}
            >
              How we work
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
            >
              Our Disciplines
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {DISCIPLINES.map((d) => (
              <div
                key={d.title}
                className="stamp-card group overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={d.image}
                    alt={d.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'oklch(0.22 0.04 40 / 0.25)' }}
                  />
                </div>
                <div className="p-5" style={{ background: 'oklch(0.97 0.02 85)' }}>
                  <h3
                    className="font-bold text-base mb-2"
                    style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
                  >
                    {d.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.50 0.04 55)' }}
                  >
                    {d.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ATELIER COLLECTION ────────────────────────────────────────────── */}
      <section className="py-14 md:py-20" style={{ background: 'oklch(0.93 0.04 80)' }}>
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-1"
                style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.55 0.14 38)' }}
              >
                Current season
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
              >
                The Atelier Collection
              </h2>
              <p
                className="mt-1 text-sm"
                style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.50 0.04 55)' }}
              >
                All pieces made to your measurements · Pre-order available
              </p>
            </div>
            <Link
              href="/shop?category=clothing"
              className="hidden sm:flex items-center gap-1 text-sm font-medium transition-all duration-150 hover:gap-2"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.55 0.14 38)' }}
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {atelierProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} animationDelay={i * 50} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/shop?category=clothing"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'oklch(0.55 0.14 38)',
                color: 'oklch(0.97 0.02 85)',
                border: '1.5px solid oklch(0.22 0.04 40)',
              }}
            >
              Shop All Clothing <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TWO LINES — side by side ──────────────────────────────────────── */}
      <section style={{ background: 'oklch(0.22 0.04 40)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Atelier */}
          <div
            className="p-10 md:p-14 border-b-2 md:border-b-0 md:border-r-2"
            style={{ borderColor: 'oklch(0.35 0.05 40)' }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.72 0.14 80)' }}
            >
              Line 01
            </p>
            <h3
              className="text-3xl md:text-4xl font-bold italic mb-4"
              style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.97 0.02 85)' }}
            >
              FeLAA Atelier
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.72 0.05 70)' }}
            >
              Original designs made to your exact measurements. Each garment is a one-off — cut, constructed, and finished by hand. You choose your fabric, your fit, your story.
            </p>
            <Link
              href="/shop?category=clothing"
              className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.72 0.14 80)' }}
            >
              Browse Atelier pieces <ArrowRight size={14} />
            </Link>
          </div>
          {/* NuMode */}
          <div className="p-10 md:p-14">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.72 0.14 80)' }}
            >
              Line 02
            </p>
            <h3
              className="text-3xl md:text-4xl font-bold italic mb-4"
              style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.97 0.02 85)' }}
            >
              FeLAA NuMode
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.72 0.05 70)' }}
            >
              Upcycled and reworked wearables — existing garments, fabrics, and materials elevated into something new. Each NuMode piece is truly one-of-a-kind and can never be remade.
            </p>
            <Link
              href="/relove-soul-finds"
              className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.72 0.14 80)' }}
            >
              Explore NuMode <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FELAA NUMODE — Material Philosophy ───────────────────────────── */}
      <section className="py-14 md:py-20" style={{ background: 'oklch(0.97 0.02 85)' }}>
        <div className="container max-w-4xl mx-auto">
          <div className="mb-10">
            <p
              className="text-xs uppercase tracking-widest mb-2"
              style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.55 0.14 38)' }}
            >
              An extension of FeLAA Atelier
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
            >
              FeLAA NuMode
            </h2>
            <p
              className="text-xl italic"
              style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.55 0.14 38)' }}
            >
              A Material Philosophy
            </p>
          </div>

          <div
            className="border-l-4 pl-6 mb-10"
            style={{ borderColor: 'oklch(0.55 0.14 38)' }}
          >
            <p
              className="text-lg leading-relaxed mb-3"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.35 0.05 40)' }}
            >
              FeLAA NuMode is not a product line.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.50 0.04 55)' }}
            >
              It is a way of relating to material. Founded on the belief that materials already carry memory, labour, time, and dignity — and that the maker's role is not to overwrite these histories, but to listen, honour, and transform them.
            </p>
          </div>

          <h3
            className="text-sm font-bold uppercase tracking-widest mb-6"
            style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.35 0.05 40)' }}
          >
            FeLAA NuMode Honours:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              { word: 'Preservation', desc: 'Keeping what already exists in circulation.' },
              { word: 'Exchange', desc: 'Allowing objects to move between hands, homes, and meanings.' },
              { word: 'Recycling', desc: 'Not as scarcity — but as respect.' },
              { word: 'Transformation', desc: 'Elevating the ordinary into ritual artefact.' },
            ].map((pillar) => (
              <div
                key={pillar.word}
                className="p-5"
                style={{
                  background: 'oklch(0.97 0.02 85)',
                  border: '2px solid oklch(0.55 0.14 38)',
                }}
              >
                <h4
                  className="font-bold text-base mb-2"
                  style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.55 0.14 38)' }}
                >
                  {pillar.word}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.50 0.04 55)' }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Manifesto */}
          <div
            className="p-8 mb-12"
            style={{ background: 'oklch(0.22 0.04 40)', border: '2px solid oklch(0.35 0.05 40)' }}
          >
            {[
              'Nothing begins as "blank".',
              'Everything begins as already alive.',
              '',
              'Surface is treated as language.',
              'Textile is treated as history.',
              'Clothing is treated as embodied memory.',
              '',
              'The work is slow, deliberate, and visible.',
              'Process is not hidden.',
              'Perfection is not the goal — coherence is.',
            ].map((line, i) =>
              line === '' ? (
                <div key={i} className="h-4" />
              ) : (
                <p
                  key={i}
                  className="text-base md:text-lg leading-snug"
                  style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.93 0.04 80)' }}
                >
                  {line}
                </p>
              )
            )}
          </div>

          {/* Economic Equanimity */}
          <h3
            className="text-2xl font-bold mb-1"
            style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.35 0.05 40)' }}
          >
            Economic Equanimity
          </h3>
          <p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.55 0.14 38)' }}
          >
            Foundational Ethos
          </p>
          <p
            className="text-base leading-relaxed mb-6"
            style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.50 0.04 55)' }}
          >
            FeLAA Atelier and FeLAA NuMode operate on economic equanimity, not extraction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Auctions', desc: 'Honour rarity, time, and presence.' },
              { label: 'Pay-what-you-can', desc: 'Honour access and equity.' },
              { label: 'Freely offered artefacts', desc: 'Honour generosity and trust.' },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5"
                style={{ border: '2px solid oklch(0.35 0.05 40)', background: 'oklch(0.97 0.02 85)' }}
              >
                <h4
                  className="font-bold text-sm mb-2"
                  style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.35 0.05 40)' }}
                >
                  {item.label}
                </h4>
                <p className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.50 0.04 55)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div
            className="border-l-4 pl-6"
            style={{ borderColor: 'oklch(0.55 0.14 38)' }}
          >
            <p className="text-sm leading-relaxed mb-1" style={{ color: 'oklch(0.50 0.04 55)' }}>
              Value is not enforced — it is felt.
            </p>
            <p className="text-sm leading-relaxed mb-1" style={{ color: 'oklch(0.50 0.04 55)' }}>
              Those who can give more do. Those who cannot are not excluded.
            </p>
            <p
              className="text-sm font-semibold mt-3"
              style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.35 0.05 40)' }}
            >
              This is not charity. This is balance in practice.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20" style={{ background: 'oklch(0.55 0.14 38)' }}>
        <div className="container max-w-xl mx-auto text-center">
          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.72 0.14 80)' }}
          >
            Liverpool · Lagos · Everywhere
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.97 0.02 85)' }}
          >
            Wear a deeper story.
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/shop?category=clothing"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all hover:gap-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'oklch(0.22 0.04 40)',
                color: 'oklch(0.97 0.02 85)',
                border: '2px solid oklch(0.22 0.04 40)',
              }}
            >
              Shop Clothing <ArrowRight size={16} />
            </Link>
            <Link
              href="/shop?category=art"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'transparent',
                color: 'oklch(0.97 0.02 85)',
                border: '2px solid oklch(0.97 0.02 85 / 0.6)',
              }}
            >
              Browse Art
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
