// ==========================================================================
// ReLove Soul Finds — Top Navigation (Desktop)
// Visible on md+ screens; hidden on mobile (BottomNav takes over)
// Design: Warm sand background, walnut text, terracotta accents
// ==========================================================================

import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, Search, Heart, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/shop', label: 'Shop All' },
  { href: '/shop?category=art', label: 'Art' },
  { href: '/shop?category=clothing', label: 'Clothing' },
  { href: '/shop?category=collectibles', label: 'Collectibles' },
  { href: '/shop?category=furniture', label: 'Furniture' },
  { href: '/shop?category=jewelry', label: 'Jewelry' },
  { href: '/relove-soul-finds', label: 'Relove Soul Finds' },
  { href: '/felaa', label: 'FeLAA Atelier' },
]

export default function TopNav() {
  const [location] = useLocation();
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 w-full"
      style={{
        background: 'oklch(0.97 0.02 85)',
        borderBottom: '2px solid oklch(0.22 0.04 40)',
      }}
    >
      <div className="container flex items-center justify-between h-14 md:h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-sm flex items-center justify-center text-sm font-bold transition-transform duration-200 group-hover:rotate-3"
            style={{
              background: 'oklch(0.55 0.14 38)',
              color: 'oklch(0.97 0.02 85)',
              fontFamily: 'Fraunces, serif',
              border: '1.5px solid oklch(0.22 0.04 40)',
            }}
          >
            F
          </div>
          <span
            className="text-lg font-bold leading-tight hidden sm:block"
            style={{
              fontFamily: 'Fraunces, serif',
              color: 'oklch(0.22 0.04 40)',
            }}
          >
            FeLAÁ Boutique
          </span>
          <span
            className="text-base font-bold leading-tight sm:hidden"
            style={{
              fontFamily: 'Fraunces, serif',
              color: 'oklch(0.22 0.04 40)',
            }}
          >
            FeLAÁ
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = location === href || (href !== '/shop' && location.startsWith(href.split('?')[0]));
            return (
              <Link
                key={href}
                href={href}
                className="px-2 py-1.5 text-xs font-medium rounded-sm transition-all duration-150"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: isActive ? 'oklch(0.97 0.02 85)' : 'oklch(0.35 0.05 40)',
                  background: isActive ? 'oklch(0.55 0.14 38)' : 'transparent',
                  border: isActive ? '1.5px solid oklch(0.22 0.04 40)' : '1.5px solid transparent',
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-1">
          <Link
            href="/search"
            className="p-2 rounded-sm transition-colors duration-150 hover:bg-black/5"
            style={{ color: 'oklch(0.35 0.05 40)' }}
          >
            <Search size={20} strokeWidth={1.8} />
          </Link>
          <Link
            href="/wishlist"
            className="p-2 rounded-sm transition-colors duration-150 hover:bg-black/5 hidden md:flex"
            style={{ color: 'oklch(0.35 0.05 40)' }}
          >
            <Heart size={20} strokeWidth={1.8} />
          </Link>
          <Link
            href="/cart"
            className="relative p-2 rounded-sm transition-colors duration-150 hover:bg-black/5"
            style={{ color: 'oklch(0.35 0.05 40)' }}
          >
            <ShoppingBag size={20} strokeWidth={1.8} />
            {totalItems > 0 && (
              <span
                className="absolute top-0.5 right-0.5 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[10px] font-bold px-1"
                style={{
                  background: 'oklch(0.55 0.14 38)',
                  color: 'oklch(0.97 0.02 85)',
                  fontFamily: 'DM Sans, sans-serif',
                  border: '1px solid oklch(0.22 0.04 40)',
                }}
              >
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </Link>

          {/* Mobile hamburger (shown on sm, hidden on md) */}
          <button
            className="p-2 rounded-sm md:hidden transition-colors duration-150 hover:bg-black/5"
            style={{ color: 'oklch(0.35 0.05 40)' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-t-2 animate-fade-in"
          style={{
            borderColor: 'oklch(0.22 0.04 40)',
            background: 'oklch(0.22 0.04 40)',
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-sm font-medium border-b transition-colors duration-150 hover:opacity-80"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: 'oklch(0.93 0.04 80)',
                borderColor: 'oklch(0.35 0.05 40)',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
