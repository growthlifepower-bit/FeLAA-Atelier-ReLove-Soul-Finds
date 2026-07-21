// ==========================================================================
// ReLove Soul Finds — Home Page
// Design: Soul Market — Warm Brutalist Vintage
// Sections: Hero, Categories, Featured, New Arrivals, About, Newsletter
// ==========================================================================

import ProductCard from '@/components/ProductCard';
import { CATEGORIES, getFeaturedProducts, getNewArrivals } from '@/lib/products';

const HOME_TILES = [
  ...CATEGORIES,
  {
    id: 'felaa-atelier',
    label: 'FeLAA Atelier',
    description: 'Original designs & symbolic pieces',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663721448837/Tiz4gBHdGyBwEgDj9BYoTS/felaa-hero-home-RFYR2z2AugrsBX9BUMSAMi.webp',
    count: null as number | null,
    emoji: '✦',
    href: '/felaa',
  },
];
import { ArrowRight, Recycle, Heart, Sparkles, Package, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { useEffect, useRef, useState, useCallback } from 'react';

const SLIDES = [
  {
    id: 'felaa',
    label: '✦ A Symbolic Lifestyle Atelier',
    headline: ['FeLAA', 'Atelier'],
    accentIndex: -1,
    subtext: 'A symbolic lifestyle atelier exploring ritual design, sonic anthropology, contemporary ancestral abstraction, and spiritual folk-modernism.',
    ctas: [{ label: 'Discover FeLAA Atelier', href: '/felaa', primary: true }],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663721448837/Tiz4gBHdGyBwEgDj9BYoTS/felaa-hero-home-RFYR2z2AugrsBX9BUMSAMi.webp',
  },
  {
    id: 'relove',
    label: '✦ Treasures with a past',
    headline: ['ReLove', 'Soul', 'Finds'],
    accentIndex: 1,
    subtext: 'Soulful collectibles, upcycled art and apparel, nostalgic toys, and handcrafted + reworked furniture — loved into the future.',
    ctas: [
      { label: 'Shop the Collection', href: '/shop', primary: true },
      { label: 'New Arrivals', href: '/shop?category=clothing', primary: false },
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663721448837/Tiz4gBHdGyBwEgDj9BYoTS/hero-banner-3jgP238RW3WaCGjynGDEQF.webp',
  },
];

// Simple intersection observer hook for scroll animations
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Home() {
  const featured = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const categoriesRef = useInView(0.05);
  const featuredRef = useInView(0.05);
  const newRef = useInView(0.05);
  const aboutRef = useInView(0.1);

  const [slideIndex, setSlideIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const goToSlide = useCallback((next: number) => {
    setFading(true);
    setTimeout(() => {
      setSlideIndex(next);
      setFading(false);
    }, 350);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((slideIndex + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slideIndex, goToSlide]);

  const slide = SLIDES[slideIndex];

  return (
    <div className="min-h-screen pb-safe">
      {/* ── HERO CAROUSEL ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: '85vh' }}>
        {/* Background image — crossfades on slide change */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <img
            src={slide.image}
            alt={slide.id}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, oklch(0.22 0.04 40 / 0.82) 0%, oklch(0.22 0.04 40 / 0.45) 55%, oklch(0.22 0.04 40 / 0.15) 100%)',
            }}
          />
        </div>

        {/* Slide content */}
        <div
          className="relative container flex flex-col justify-end h-full transition-opacity duration-700"
          style={{ minHeight: '85vh', paddingBottom: '3rem', opacity: fading ? 0 : 1 }}
        >
          <div className="max-w-xl">
            {/* Label */}
            <div
              className="inline-block px-3 py-1 mb-4 text-xs uppercase tracking-widest"
              style={{
                fontFamily: 'Courier Prime, monospace',
                background: 'oklch(0.72 0.14 80)',
                color: 'oklch(0.22 0.04 40)',
                border: '1.5px solid oklch(0.22 0.04 40)',
              }}
            >
              {slide.label}
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] mb-5"
              style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.97 0.02 85)', fontStyle: 'italic' }}
            >
              {slide.headline.map((word, i) => (
                <span key={word}>
                  {i === slide.accentIndex
                    ? <span style={{ color: 'oklch(0.72 0.14 80)' }}>{word}</span>
                    : word}
                  <br />
                </span>
              ))}
            </h1>

            {/* Subtext */}
            <p
              className="text-base sm:text-lg mb-8 max-w-sm leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.88 0.03 80)' }}
            >
              {slide.subtext}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              {slide.ctas.map(cta => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:gap-3"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    background: cta.primary ? 'oklch(0.55 0.14 38)' : 'transparent',
                    color: 'oklch(0.97 0.02 85)',
                    border: cta.primary ? '2px solid oklch(0.97 0.02 85)' : '2px solid oklch(0.97 0.02 85 / 0.6)',
                  }}
                >
                  {cta.label}
                  {cta.primary && <ArrowRight size={16} />}
                </Link>
              ))}
            </div>
          </div>

          {/* Carousel controls */}
          <div className="absolute bottom-16 right-6 flex flex-col items-end gap-3">
            {/* Prev / Next arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => goToSlide((slideIndex - 1 + SLIDES.length) % SLIDES.length)}
                className="w-8 h-8 flex items-center justify-center transition-opacity hover:opacity-80"
                style={{
                  background: 'oklch(0.22 0.04 40 / 0.6)',
                  color: 'oklch(0.97 0.02 85)',
                  border: '1.5px solid oklch(0.97 0.02 85 / 0.4)',
                }}
                aria-label="Previous slide"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => goToSlide((slideIndex + 1) % SLIDES.length)}
                className="w-8 h-8 flex items-center justify-center transition-opacity hover:opacity-80"
                style={{
                  background: 'oklch(0.22 0.04 40 / 0.6)',
                  color: 'oklch(0.97 0.02 85)',
                  border: '1.5px solid oklch(0.97 0.02 85 / 0.4)',
                }}
                aria-label="Next slide"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            {/* Dots */}
            <div className="flex gap-1.5">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goToSlide(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === slideIndex ? '20px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === slideIndex ? 'oklch(0.72 0.14 80)' : 'oklch(0.97 0.02 85 / 0.4)',
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-6 left-6 hidden md:flex flex-col items-start gap-1"
            style={{ color: 'oklch(0.88 0.03 80)' }}
          >
            <span className="text-[10px] uppercase tracking-widest" style={{ fontFamily: 'Courier Prime, monospace' }}>
              Scroll
            </span>
            <div className="w-px h-10 bg-current opacity-40" />
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

      {/* ── CATEGORIES ───────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16" ref={categoriesRef.ref}>
        <div className="container">
          {/* Section header */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-1"
                style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.55 0.14 38)' }}
              >
                Browse by
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
              >
                Category
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

          {/* Category grid — 2 cols mobile, 3 cols desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {HOME_TILES.map((cat, i) => (
              <Link key={cat.id} href={cat.href ?? `/shop?category=${cat.id}`}>
                <div
                  className={`group relative overflow-hidden aspect-[3/4] cursor-pointer stamp-card ${categoriesRef.inView ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(to top, oklch(0.22 0.04 40 / 0.85) 0%, oklch(0.22 0.04 40 / 0.2) 60%, transparent 100%)',
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div
                      className="text-lg mb-0.5"
                      style={{ lineHeight: 1 }}
                    >
                      {cat.emoji}
                    </div>
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
                      {cat.count != null ? `${cat.count} items` : 'Explore'}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────────────────────── */}
      <section
        className="py-12 md:py-16"
        ref={featuredRef.ref}
        style={{ background: 'oklch(0.22 0.04 40)' }}
      >
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-1"
                style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.72 0.14 80)' }}
              >
                Hand-picked
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.97 0.02 85)' }}
              >
                Featured
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {featured.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                animationDelay={featuredRef.inView ? i * 60 : 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── NEW ARRIVALS ─────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16" ref={newRef.ref}>
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-1"
                style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.55 0.14 38)' }}
              >
                Just landed
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
              >
                New Arrivals
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {newArrivals.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                animationDelay={newRef.inView ? i * 60 : 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / VALUES ───────────────────────────────────────────────── */}
      <section
        className="py-14 md:py-20"
        ref={aboutRef.ref}
        style={{ background: 'oklch(0.93 0.04 80)' }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p
              className="text-xs uppercase tracking-widest mb-2"
              style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.55 0.14 38)' }}
            >
              Our story
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)', fontStyle: 'italic' }}
            >
              Every piece has a soul.
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.40 0.04 50)' }}
            >
              FeLAÁ Boutique is home to Relove Soul Finds and FeLAA Atelier — two arms of the same living practice. We source soulful collectibles, upcycle clothing and art, and rescue furniture, because the best things are the ones that carry a story.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Recycle, title: 'Sustainably Sourced', desc: 'Every item is carefully selected and given new purpose.' },
              { icon: Heart, title: 'Loved with Care', desc: 'We restore and upcycle each piece before it finds a new home.' },
              { icon: Sparkles, title: 'One of a Kind', desc: 'No two items are the same — each find is truly unique.' },
              { icon: Package, title: 'Eco Packaging', desc: 'All orders ship in recycled and compostable materials.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`p-5 flex flex-col gap-3 ${aboutRef.inView ? 'animate-fade-up' : 'opacity-0'}`}
                style={{
                  animationDelay: `${i * 80}ms`,
                  background: 'oklch(0.97 0.02 85)',
                  border: '2px solid oklch(0.22 0.04 40)',
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{
                    background: 'oklch(0.55 0.14 38)',
                    color: 'oklch(0.97 0.02 85)',
                    border: '1.5px solid oklch(0.22 0.04 40)',
                  }}
                >
                  <Icon size={18} />
                </div>
                <h3
                  className="text-sm font-bold"
                  style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
                >
                  {title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.45 0.04 55)' }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────────────────── */}
      <section
        className="py-14 md:py-20"
        style={{ background: 'oklch(0.55 0.14 38)' }}
      >
        <div className="container max-w-xl mx-auto text-center">
          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.72 0.14 80)' }}
          >
            Stay in the loop
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.97 0.02 85)' }}
          >
            New finds, first.
          </h2>
          <p
            className="text-sm mb-8 opacity-80"
            style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.97 0.02 85)' }}
          >
            Subscribe for early access to new arrivals, behind-the-scenes stories, and exclusive offers.
          </p>
          <form
            className="flex gap-2 max-w-sm mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector('input');
              if (input?.value) {
                import('sonner').then(({ toast }) => {
                  toast.success('You\'re on the list! ✦', { description: 'We\'ll be in touch soon.' });
                });
                input.value = '';
              }
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 text-sm outline-none"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'oklch(0.97 0.02 85)',
                color: 'oklch(0.22 0.04 40)',
                border: '2px solid oklch(0.22 0.04 40)',
              }}
            />
            <button
              type="submit"
              className="px-5 py-3 text-sm font-semibold transition-all duration-150 hover:opacity-90 active:scale-95"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'oklch(0.22 0.04 40)',
                color: 'oklch(0.97 0.02 85)',
                border: '2px solid oklch(0.22 0.04 40)',
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer
        className="py-8"
        style={{
          background: 'oklch(0.22 0.04 40)',
          borderTop: '2px solid oklch(0.35 0.05 40)',
        }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 flex items-center justify-center text-sm font-bold"
                style={{
                  background: 'oklch(0.55 0.14 38)',
                  color: 'oklch(0.97 0.02 85)',
                  fontFamily: 'Fraunces, serif',
                  border: '1.5px solid oklch(0.55 0.14 38)',
                }}
              >
                F
              </div>
              <span
                className="text-sm font-semibold"
                style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.93 0.04 80)' }}
              >
                FeLAÁ Boutique
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
              {[
                { href: '/shop', label: 'Shop' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
                { href: '/shipping', label: 'Shipping' },
                { href: '/returns', label: 'Returns' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs transition-opacity duration-150 hover:opacity-100 opacity-60"
                  style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.93 0.04 80)' }}
                >
                  {label}
                </Link>
              ))}
            </div>
            <p
              className="text-xs opacity-40"
              style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.93 0.04 80)' }}
            >
              © 2025 FeLAÁ Boutique
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
