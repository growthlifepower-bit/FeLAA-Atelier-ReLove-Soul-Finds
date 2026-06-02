// ==========================================================================
// ReLove Soul Finds — Search Page
// Real-time product search with results grid
// ==========================================================================

import ProductCard from '@/components/ProductCard';
import { PRODUCTS, searchProducts } from '@/lib/products';
import { Search, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const SUGGESTIONS = ['brass', 'vintage dress', 'tin robot', 'wooden', 'embroidered', 'rattan', 'porcelain'];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(PRODUCTS.slice(0, 8));
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults(PRODUCTS.slice(0, 8));
      setHasSearched(false);
      return;
    }
    const timer = setTimeout(() => {
      setResults(searchProducts(query));
      setHasSearched(true);
    }, 200);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="min-h-screen pb-safe">
      {/* Search bar */}
      <div
        className="sticky top-14 md:top-16 z-30 border-b-2 py-3"
        style={{
          background: 'oklch(0.97 0.02 85)',
          borderColor: 'oklch(0.22 0.04 40)',
        }}
      >
        <div className="container">
          <div
            className="flex items-center gap-3 px-4 py-2"
            style={{ border: '2px solid oklch(0.22 0.04 40)', background: 'oklch(1 0 0)' }}
          >
            <Search size={18} style={{ color: 'oklch(0.55 0.14 38)', flexShrink: 0 }} />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search for vintage finds..."
              className="flex-1 text-sm outline-none bg-transparent"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: 'oklch(0.22 0.04 40)',
              }}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="transition-opacity hover:opacity-70"
                style={{ color: 'oklch(0.55 0.05 60)' }}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container py-6">
        {/* Suggestions */}
        {!query && (
          <div className="mb-6">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.55 0.14 38)' }}
            >
              Popular searches
            </p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map(s => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="px-3 py-1.5 text-xs font-medium transition-all duration-150 hover:opacity-80"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    background: 'oklch(0.93 0.04 80)',
                    color: 'oklch(0.35 0.05 40)',
                    border: '1.5px solid oklch(0.22 0.04 40)',
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results header */}
        <div className="mb-4">
          {hasSearched ? (
            <p
              className="text-sm"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.50 0.04 55)' }}
            >
              {results.length > 0
                ? `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`
                : `No results for "${query}"`}
            </p>
          ) : (
            <p
              className="text-xs uppercase tracking-widest"
              style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.55 0.14 38)' }}
            >
              All items
            </p>
          )}
        </div>

        {/* Results grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {results.map((product, i) => (
              <ProductCard key={product.id} product={product} animationDelay={i * 30} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-4xl mb-4">🔍</p>
            <h3
              className="text-xl font-bold mb-2"
              style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
            >
              No finds matching "{query}"
            </h3>
            <p
              className="text-sm"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.50 0.04 55)' }}
            >
              Try a different search term or browse by category.
            </p>
            <button
              onClick={() => setQuery('')}
              className="mt-4 px-4 py-2 text-sm font-medium"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'oklch(0.55 0.14 38)',
                color: 'oklch(0.97 0.02 85)',
                border: '1.5px solid oklch(0.22 0.04 40)',
              }}
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
