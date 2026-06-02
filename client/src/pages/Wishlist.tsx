// ==========================================================================
// ReLove Soul Finds — Wishlist Page (placeholder)
// ==========================================================================

import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'wouter';

export default function Wishlist() {
  return (
    <div className="min-h-screen pb-safe">
      <div
        className="py-8 md:py-12 border-b-2"
        style={{
          background: 'oklch(0.22 0.04 40)',
          borderColor: 'oklch(0.35 0.05 40)',
        }}
      >
        <div className="container">
          <p
            className="text-xs uppercase tracking-widest mb-1"
            style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.72 0.14 80)' }}
          >
            Your
          </p>
          <h1
            className="text-4xl font-bold"
            style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.97 0.02 85)' }}
          >
            Saved Finds
          </h1>
        </div>
      </div>

      <div className="container py-16 flex flex-col items-center justify-center text-center">
        <div
          className="w-20 h-20 flex items-center justify-center mb-6"
          style={{
            background: 'oklch(0.93 0.04 80)',
            border: '2px solid oklch(0.22 0.04 40)',
          }}
        >
          <Heart size={32} style={{ color: 'oklch(0.55 0.14 38)' }} />
        </div>
        <h2
          className="text-2xl font-bold mb-2"
          style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
        >
          No saved items yet
        </h2>
        <p
          className="text-sm mb-6 max-w-xs"
          style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.50 0.04 55)' }}
        >
          Tap the heart icon on any item to save it here for later.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            background: 'oklch(0.55 0.14 38)',
            color: 'oklch(0.97 0.02 85)',
            border: '2px solid oklch(0.22 0.04 40)',
          }}
        >
          <ShoppingBag size={16} />
          Browse the Shop
        </Link>
      </div>
    </div>
  );
}
