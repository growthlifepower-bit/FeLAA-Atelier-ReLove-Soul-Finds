// ==========================================================================
// ReLove Soul Finds — Product Detail Page
// Full product view with image, details, and cart actions
// ==========================================================================

import { useCart } from '@/contexts/CartContext';
import { CONDITION_COLORS, PRODUCTS, getProductById, getProductsByCategory } from '@/lib/products';
import { ArrowLeft, ShoppingBag, Heart, Share2, Check, Tag, Clock } from 'lucide-react';
import { Link, useParams } from 'wouter';
import { useState } from 'react';
import { toast } from 'sonner';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id);
  const { addItem, isInCart } = useCart();
  const [wishlisted, setWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pb-safe">
        <p
          className="text-4xl mb-4"
          style={{ fontFamily: 'Courier Prime, monospace' }}
        >
          ✦
        </p>
        <h2
          className="text-2xl font-bold mb-2"
          style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
        >
          Item not found
        </h2>
        <Link
          href="/shop"
          className="mt-4 px-4 py-2 text-sm font-medium"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            background: 'oklch(0.55 0.14 38)',
            color: 'oklch(0.97 0.02 85)',
            border: '1.5px solid oklch(0.22 0.04 40)',
          }}
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const inCart = isInCart(product.id);
  const related = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  function handleClaim() {
    if (product!.purchaseLink) {
      window.open(product!.purchaseLink, '_blank', 'noopener,noreferrer');
    } else {
      addItem(product!);
      toast.success(`${product!.name} claimed!`, {
        description: `£${product!.price.toFixed(2)}`,
        duration: 2500,
      });
    }
  }

  function handleShare() {
    if (navigator.share) {
      navigator.share({ title: product!.name, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast('Link copied to clipboard!', { duration: 2000 });
    }
  }

  return (
    <div className="min-h-screen pb-safe">
      {/* Back nav */}
      <div
        className="border-b-2"
        style={{ borderColor: 'oklch(0.22 0.04 40)', background: 'oklch(0.97 0.02 85)' }}
      >
        <div className="container py-3">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.35 0.05 40)' }}
          >
            <ArrowLeft size={16} />
            Back to Shop
          </Link>
        </div>
      </div>

      <div className="container py-6 md:py-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div
              className="relative overflow-hidden aspect-[3/4] md:aspect-square stamp-card"
              style={{ background: 'oklch(0.93 0.04 80)' }}
            >
              {!imageLoaded && (
                <div className="absolute inset-0 skeleton" />
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onLoad={() => setImageLoaded(true)}
                style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 300ms' }}
              />
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                {product.isNew && (
                  <span
                    className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider"
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
                    className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider"
                    style={{
                      fontFamily: 'Courier Prime, monospace',
                      background: 'oklch(0.55 0.14 38)',
                      color: 'oklch(0.97 0.02 85)',
                      border: '1.5px solid oklch(0.22 0.04 40)',
                    }}
                  >
                    On Sale
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-5">
            {/* Category breadcrumb */}
            <div className="flex items-center gap-2">
              <Link
                href={`/shop?category=${product.category}`}
                className="text-xs uppercase tracking-wider font-medium transition-opacity hover:opacity-70"
                style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.55 0.14 38)' }}
              >
                {product.category}
              </Link>
              <span style={{ color: 'oklch(0.70 0.03 70)' }}>›</span>
              <span
                className="text-xs"
                style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.60 0.03 70)' }}
              >
                {product.era}
              </span>
            </div>

            {/* Name */}
            <h1
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
            >
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span
                className="text-3xl font-bold"
                style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.55 0.14 38)' }}
              >
                £{product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span
                  className="text-lg line-through"
                  style={{ color: 'oklch(0.60 0.03 70)' }}
                >
                  £{product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.originalPrice && (
                <span
                  className="text-sm font-bold px-2 py-0.5"
                  style={{
                    fontFamily: 'Courier Prime, monospace',
                    background: 'oklch(0.55 0.14 38)',
                    color: 'oklch(0.97 0.02 85)',
                    border: '1px solid oklch(0.22 0.04 40)',
                  }}
                >
                  Save £{product.originalPrice - product.price}
                </span>
              )}
            </div>

            {/* Condition & Era */}
            <div className="flex flex-wrap gap-2">
              <span
                className={`text-xs font-bold px-3 py-1 uppercase tracking-wider ${CONDITION_COLORS[product.condition]}`}
                style={{ border: '1px solid currentColor' }}
              >
                {product.condition} Condition
              </span>
              <span
                className="flex items-center gap-1 text-xs px-3 py-1"
                style={{
                  fontFamily: 'Courier Prime, monospace',
                  background: 'oklch(0.93 0.04 80)',
                  color: 'oklch(0.35 0.05 40)',
                  border: '1px solid oklch(0.22 0.04 40)',
                }}
              >
                <Clock size={11} />
                {product.era}
              </span>
            </div>

            {/* Description */}
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.40 0.04 50)' }}
            >
              {product.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {product.tags.map(tag => (
                <span
                  key={tag}
                  className="flex items-center gap-1 text-xs px-2 py-1"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    background: 'oklch(0.93 0.04 80)',
                    color: 'oklch(0.45 0.04 55)',
                    border: '1px solid oklch(0.82 0.05 70)',
                  }}
                >
                  <Tag size={9} />
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleClaim}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold transition-all duration-150 active:scale-98"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  background: (!product.purchaseLink && inCart) ? 'oklch(0.22 0.04 40)' : 'oklch(0.55 0.14 38)',
                  color: 'oklch(0.97 0.02 85)',
                  border: '2px solid oklch(0.22 0.04 40)',
                }}
              >
                {(!product.purchaseLink && inCart) ? (
                  <>
                    <Check size={16} />
                    Claimed — Claim Another
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    Claim This Piece
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  setWishlisted(!wishlisted);
                  toast(wishlisted ? 'Removed from saved' : 'Saved to wishlist ♥', { duration: 1800 });
                }}
                className="w-12 flex items-center justify-center transition-all duration-150"
                style={{
                  background: wishlisted ? 'oklch(0.55 0.14 38)' : 'transparent',
                  color: wishlisted ? 'oklch(0.97 0.02 85)' : 'oklch(0.35 0.05 40)',
                  border: '2px solid oklch(0.22 0.04 40)',
                }}
                aria-label="Save to wishlist"
              >
                <Heart size={18} fill={wishlisted ? 'currentColor' : 'none'} />
              </button>
              <button
                onClick={handleShare}
                className="w-12 flex items-center justify-center transition-all duration-150 hover:opacity-70"
                style={{
                  background: 'transparent',
                  color: 'oklch(0.35 0.05 40)',
                  border: '2px solid oklch(0.22 0.04 40)',
                }}
                aria-label="Share"
              >
                <Share2 size={18} />
              </button>
            </div>

            {/* Shipping note */}
            <div
              className="p-3 text-xs leading-relaxed"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'oklch(0.93 0.04 80)',
                color: 'oklch(0.40 0.04 50)',
                border: '1.5px solid oklch(0.82 0.05 70)',
              }}
            >
              ♻️ Ships in recycled packaging within 3–5 business days. Free returns within 14 days.
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16">
            <div className="mb-6">
              <p
                className="text-xs uppercase tracking-widest mb-1"
                style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.55 0.14 38)' }}
              >
                You might also love
              </p>
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
              >
                More {product.category}
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} animationDelay={i * 60} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
