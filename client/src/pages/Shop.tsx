// ==========================================================================
// ReLove Soul Finds — Shop Page
// Category filter tabs, sort controls, and full product grid
// ==========================================================================

import ProductCard from '@/components/ProductCard';
import { CATEGORIES, PRODUCTS, getProductsByCategory, type Category } from '@/lib/products';
import { SlidersHorizontal, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSearch } from 'wouter';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
];

export default function Shop() {
  const searchStr = useSearch();
  const params = new URLSearchParams(searchStr);
  const urlCategory = (params.get('category') || 'all') as Category;

  const [activeCategory, setActiveCategory] = useState<Category>(urlCategory);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [priceMax, setPriceMax] = useState(300);

  useEffect(() => {
    setActiveCategory(urlCategory);
  }, [urlCategory]);

  const allCategories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Items' },
    ...CATEGORIES.map(c => ({ id: c.id as Category, label: c.shortLabel })),
  ];

  let products = getProductsByCategory(activeCategory);

  // Price filter
  products = products.filter(p => p.price <= priceMax);

  // Sort
  switch (sortBy) {
    case 'price-asc':
      products = [...products].sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      products = [...products].sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      products = [...products].filter(p => p.isNew).concat([...products].filter(p => !p.isNew));
      break;
    default:
      products = [...products].sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
  }

  const maxPrice = Math.max(...PRODUCTS.map(p => p.price));

  return (
    <div className="min-h-screen pb-safe">
      {/* Page header */}
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
            Browse
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.97 0.02 85)' }}
          >
            {activeCategory === 'all'
              ? 'All Finds'
              : CATEGORIES.find(c => c.id === activeCategory)?.label || 'Shop'}
          </h1>
          <p
            className="mt-1 text-sm opacity-60"
            style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.93 0.04 80)' }}
          >
            {products.length} item{products.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Category tabs — scrollable on mobile */}
      <div
        className="sticky top-14 md:top-16 z-30 border-b-2"
        style={{
          background: 'oklch(0.97 0.02 85)',
          borderColor: 'oklch(0.22 0.04 40)',
        }}
      >
        <div className="container">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-none -mx-1">
            {allCategories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className="flex-shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-all duration-150"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  borderColor: activeCategory === id ? 'oklch(0.55 0.14 38)' : 'transparent',
                  color: activeCategory === id ? 'oklch(0.55 0.14 38)' : 'oklch(0.45 0.04 55)',
                  fontWeight: activeCategory === id ? 600 : 400,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-6">
        {/* Sort & Filter bar */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium transition-all duration-150"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              background: showFilters ? 'oklch(0.22 0.04 40)' : 'transparent',
              color: showFilters ? 'oklch(0.97 0.02 85)' : 'oklch(0.35 0.05 40)',
              border: '1.5px solid oklch(0.22 0.04 40)',
            }}
          >
            <SlidersHorizontal size={14} />
            Filters
            {priceMax < maxPrice && (
              <span
                className="w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-bold"
                style={{ background: 'oklch(0.55 0.14 38)', color: 'oklch(0.97 0.02 85)' }}
              >
                1
              </span>
            )}
          </button>

          <div className="flex items-center gap-2">
            <label
              className="text-xs hidden sm:block"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.50 0.04 55)' }}
            >
              Sort:
            </label>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="text-xs px-3 py-2 outline-none"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'oklch(0.97 0.02 85)',
                color: 'oklch(0.22 0.04 40)',
                border: '1.5px solid oklch(0.22 0.04 40)',
              }}
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter panel */}
        {showFilters && (
          <div
            className="mb-6 p-4 animate-fade-up"
            style={{
              background: 'oklch(0.93 0.04 80)',
              border: '2px solid oklch(0.22 0.04 40)',
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h3
                className="text-sm font-semibold"
                style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
              >
                Filters
              </h3>
              {priceMax < maxPrice && (
                <button
                  onClick={() => setPriceMax(maxPrice)}
                  className="flex items-center gap-1 text-xs"
                  style={{ color: 'oklch(0.55 0.14 38)', fontFamily: 'DM Sans, sans-serif' }}
                >
                  <X size={12} /> Clear
                </button>
              )}
            </div>
            <div>
              <label
                className="text-xs font-medium mb-2 block"
                style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.35 0.05 40)' }}
              >
                Max Price: <span style={{ color: 'oklch(0.55 0.14 38)', fontFamily: 'Fraunces, serif' }}>${priceMax}</span>
              </label>
              <input
                type="range"
                min={10}
                max={maxPrice}
                step={5}
                value={priceMax}
                onChange={e => setPriceMax(Number(e.target.value))}
                className="w-full max-w-xs accent-terracotta"
                style={{ accentColor: 'oklch(0.55 0.14 38)' }}
              />
              <div
                className="flex justify-between text-[10px] mt-1 max-w-xs"
                style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.55 0.05 60)' }}
              >
                <span>$10</span>
                <span>${maxPrice}</span>
              </div>
            </div>
          </div>
        )}

        {/* Product grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} animationDelay={i * 40} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div
              className="text-4xl mb-4"
              style={{ fontFamily: 'Courier Prime, monospace' }}
            >
              ✦
            </div>
            <h3
              className="text-xl font-bold mb-2"
              style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
            >
              No items found
            </h3>
            <p
              className="text-sm"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.50 0.04 55)' }}
            >
              Try adjusting your filters or browse all categories.
            </p>
            <button
              onClick={() => { setActiveCategory('all'); setPriceMax(maxPrice); }}
              className="mt-4 px-4 py-2 text-sm font-medium"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'oklch(0.55 0.14 38)',
                color: 'oklch(0.97 0.02 85)',
                border: '1.5px solid oklch(0.22 0.04 40)',
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
