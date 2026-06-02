// ==========================================================================
// ReLove Soul Finds — Product Card
// Stamp-card style with tilt hover, condition badge, and cart action
// Design: Thick border, slight rotation on hover, warm palette
// ==========================================================================

import { useCart } from '@/contexts/CartContext';
import { CONDITION_COLORS, type Product } from '@/lib/products';
import { ShoppingBag, Heart, Check } from 'lucide-react';
import { Link } from 'wouter';
import { toast } from 'sonner';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  animationDelay?: number;
}

export default function ProductCard({ product, animationDelay = 0 }: ProductCardProps) {
  const { addItem, isInCart } = useCart();
  const [wishlisted, setWishlisted] = useState(false);
  const inCart = isInCart(product.id);

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast.success(`${product.name} added to cart!`, {
      description: `$${product.price.toFixed(2)}`,
      duration: 2500,
    });
  }

  function handleWishlist(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setWishlisted(!wishlisted);
    toast(wishlisted ? 'Removed from saved' : 'Saved to wishlist ♥', { duration: 1800 });
  }

  return (
    <Link href={`/product/${product.id}`}>
      <article
        className="stamp-card group relative flex flex-col overflow-hidden bg-white animate-fade-up cursor-pointer"
        style={{ animationDelay: `${animationDelay}ms` }}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[3/4] bg-sand">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Overlay badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <span
                className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                style={{
                  fontFamily: 'Courier Prime, monospace',
                  background: 'oklch(0.72 0.14 80)',
                  color: 'oklch(0.22 0.04 40)',
                  border: '1.5px solid oklch(0.22 0.04 40)',
                }}
              >
                New In
              </span>
            )}
            {product.originalPrice && (
              <span
                className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                style={{
                  fontFamily: 'Courier Prime, monospace',
                  background: 'oklch(0.55 0.14 38)',
                  color: 'oklch(0.97 0.02 85)',
                  border: '1.5px solid oklch(0.22 0.04 40)',
                }}
              >
                Sale
              </span>
            )}
          </div>

          {/* Wishlist button */}
          <button
            onClick={handleWishlist}
            className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
            style={{
              background: 'oklch(0.97 0.02 85)',
              border: '1.5px solid oklch(0.22 0.04 40)',
              color: wishlisted ? 'oklch(0.55 0.14 38)' : 'oklch(0.35 0.05 40)',
            }}
            aria-label="Save to wishlist"
          >
            <Heart size={14} fill={wishlisted ? 'currentColor' : 'none'} />
          </button>

          {/* Era tag */}
          <div
            className="absolute bottom-2 left-2 px-2 py-0.5 text-[10px]"
            style={{
              fontFamily: 'Courier Prime, monospace',
              background: 'oklch(0.22 0.04 40 / 0.85)',
              color: 'oklch(0.93 0.04 80)',
            }}
          >
            {product.era}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 p-3 flex-1">
          {/* Category + Condition */}
          <div className="flex items-center justify-between gap-1">
            <span
              className="text-[10px] uppercase tracking-wider font-medium"
              style={{
                fontFamily: 'Courier Prime, monospace',
                color: 'oklch(0.55 0.14 38)',
              }}
            >
              {product.category}
            </span>
            <span
              className={`text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded-sm ${CONDITION_COLORS[product.condition]}`}
            >
              {product.condition}
            </span>
          </div>

          {/* Name */}
          <h3
            className="text-sm font-semibold leading-snug line-clamp-2"
            style={{
              fontFamily: 'Fraunces, serif',
              color: 'oklch(0.22 0.04 40)',
            }}
          >
            {product.name}
          </h3>

          {/* Price row */}
          <div className="flex items-center justify-between mt-auto pt-1">
            <div className="flex items-baseline gap-1.5">
              <span
                className="text-base font-bold"
                style={{
                  fontFamily: 'Fraunces, serif',
                  color: 'oklch(0.55 0.14 38)',
                }}
              >
                ${product.price}
              </span>
              {product.originalPrice && (
                <span
                  className="text-xs line-through"
                  style={{ color: 'oklch(0.60 0.03 70)' }}
                >
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium transition-all duration-150 active:scale-95"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: inCart ? 'oklch(0.22 0.04 40)' : 'oklch(0.55 0.14 38)',
                color: 'oklch(0.97 0.02 85)',
                border: '1.5px solid oklch(0.22 0.04 40)',
              }}
              aria-label={inCart ? 'In cart' : 'Add to cart'}
            >
              {inCart ? (
                <>
                  <Check size={12} />
                  <span className="hidden sm:inline">In Cart</span>
                </>
              ) : (
                <>
                  <ShoppingBag size={12} />
                  <span className="hidden sm:inline">Add</span>
                </>
              )}
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
}
