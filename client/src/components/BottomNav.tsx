// ==========================================================================
// ReLove Soul Finds — Bottom Navigation Bar
// App-first mobile navigation with active state indicators
// Design: Warm Brutalist — deep walnut bar, terracotta active state
// ==========================================================================

import { useCart } from '@/contexts/CartContext';
import { Home, Search, ShoppingBag, Heart, Grid3X3 } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const NAV_ITEMS = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/shop', icon: Grid3X3, label: 'Shop' },
  { href: '/search', icon: Search, label: 'Search' },
  { href: '/wishlist', icon: Heart, label: 'Saved' },
  { href: '/cart', icon: ShoppingBag, label: 'Cart' },
];

export default function BottomNav() {
  const [location] = useLocation();
  const { totalItems } = useCart();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        background: 'oklch(0.22 0.04 40)',
        borderTop: '2px solid oklch(0.35 0.05 40)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      <div className="flex items-stretch">
        {NAV_ITEMS.map(({ href, icon: Icon, label }) => {
          const isActive = href === '/' ? location === '/' : location.startsWith(href);
          const isCart = href === '/cart';

          return (
            <Link
              key={href}
              href={href}
              className="relative flex flex-1 flex-col items-center justify-center py-2 gap-0.5 transition-all duration-200"
              style={{
                color: isActive ? 'oklch(0.55 0.14 38)' : 'oklch(0.65 0.03 70)',
              }}
            >
              <span className="relative">
                <Icon
                  size={22}
                  strokeWidth={isActive ? 2.5 : 1.8}
                  className="transition-transform duration-200"
                  style={{ transform: isActive ? 'scale(1.1)' : 'scale(1)' }}
                />
                {isCart && totalItems > 0 && (
                  <span
                    className="absolute -top-1.5 -right-1.5 min-w-[16px] h-4 rounded-full flex items-center justify-center text-[10px] font-bold leading-none px-1"
                    style={{
                      background: 'oklch(0.55 0.14 38)',
                      color: 'oklch(0.97 0.02 85)',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </span>
              <span
                className="text-[10px] font-medium leading-none"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {label}
              </span>
              {isActive && (
                <span
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                  style={{ background: 'oklch(0.55 0.14 38)' }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
