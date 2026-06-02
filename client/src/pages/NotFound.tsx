// ==========================================================================
// ReLove Soul Finds — 404 Not Found Page
// Design: Soul Market — Warm Brutalist Vintage
// ==========================================================================

import { Link } from 'wouter';
import { Home, ShoppingBag } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 pb-safe"
      style={{ background: 'oklch(0.97 0.02 85)' }}
    >
      {/* Big decorative number */}
      <div
        className="text-[8rem] md:text-[12rem] font-black leading-none mb-4 select-none"
        style={{
          fontFamily: 'Fraunces, serif',
          color: 'oklch(0.88 0.05 75)',
          fontStyle: 'italic',
        }}
      >
        404
      </div>

      <div
        className="inline-block px-3 py-1 mb-4 text-xs uppercase tracking-widest"
        style={{
          fontFamily: 'Courier Prime, monospace',
          background: 'oklch(0.55 0.14 38)',
          color: 'oklch(0.97 0.02 85)',
          border: '1.5px solid oklch(0.22 0.04 40)',
        }}
      >
        ✦ Lost in the thrift store
      </div>

      <h1
        className="text-3xl md:text-4xl font-bold mb-3"
        style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
      >
        This find has wandered off
      </h1>

      <p
        className="text-sm mb-8 max-w-xs"
        style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.50 0.04 55)' }}
      >
        The page you're looking for may have been sold, moved, or never existed. Let's get you back to the good stuff.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            background: 'oklch(0.55 0.14 38)',
            color: 'oklch(0.97 0.02 85)',
            border: '2px solid oklch(0.22 0.04 40)',
          }}
        >
          <Home size={16} />
          Go Home
        </Link>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            background: 'transparent',
            color: 'oklch(0.22 0.04 40)',
            border: '2px solid oklch(0.22 0.04 40)',
          }}
        >
          <ShoppingBag size={16} />
          Browse Shop
        </Link>
      </div>
    </div>
  );
}
