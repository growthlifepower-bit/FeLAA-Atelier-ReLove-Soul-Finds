// ==========================================================================
// ReLove Soul Finds — Cart Page
// Full cart view with quantity controls, totals, and checkout CTA
// ==========================================================================

import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { toast } from 'sonner';

export default function Cart() {
  const { items, totalItems, totalPrice, removeItem, updateQuantity, clearCart } = useCart();

  const shipping = totalPrice > 75 ? 0 : 8.95;
  const orderTotal = totalPrice + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pb-safe px-4 text-center">
        <div
          className="w-20 h-20 flex items-center justify-center mb-6"
          style={{
            background: 'oklch(0.93 0.04 80)',
            border: '2px solid oklch(0.22 0.04 40)',
          }}
        >
          <ShoppingBag size={32} style={{ color: 'oklch(0.55 0.14 38)' }} />
        </div>
        <h2
          className="text-2xl font-bold mb-2"
          style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
        >
          Your cart is empty
        </h2>
        <p
          className="text-sm mb-6 max-w-xs"
          style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.50 0.04 55)' }}
        >
          Discover unique vintage finds and one-of-a-kind treasures waiting for a new home.
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
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-safe">
      {/* Header */}
      <div
        className="py-6 md:py-10 border-b-2"
        style={{
          background: 'oklch(0.22 0.04 40)',
          borderColor: 'oklch(0.35 0.05 40)',
        }}
      >
        <div className="container flex items-center justify-between">
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-1"
              style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.72 0.14 80)' }}
            >
              Your
            </p>
            <h1
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.97 0.02 85)' }}
            >
              Cart ({totalItems})
            </h1>
          </div>
          <button
            onClick={() => {
              clearCart();
              toast('Cart cleared', { duration: 2000 });
            }}
            className="text-xs flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity"
            style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.93 0.04 80)' }}
          >
            <Trash2 size={12} />
            Clear all
          </button>
        </div>
      </div>

      <div className="container py-6">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-10">
          {/* Cart items */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 text-sm font-medium mb-2 transition-opacity hover:opacity-70"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.55 0.14 38)' }}
            >
              <ArrowLeft size={14} />
              Continue Shopping
            </Link>

            {items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex gap-4 p-4 animate-fade-up"
                style={{
                  background: 'oklch(1 0 0)',
                  border: '2px solid oklch(0.22 0.04 40)',
                }}
              >
                {/* Image */}
                <Link href={`/product/${product.id}`} className="flex-shrink-0">
                  <div className="w-20 h-24 sm:w-24 sm:h-28 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>

                {/* Details */}
                <div className="flex flex-col flex-1 gap-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span
                        className="text-[10px] uppercase tracking-wider"
                        style={{ fontFamily: 'Courier Prime, monospace', color: 'oklch(0.55 0.14 38)' }}
                      >
                        {product.category} · {product.era}
                      </span>
                      <Link href={`/product/${product.id}`}>
                        <h3
                          className="text-sm font-semibold leading-snug mt-0.5 hover:underline"
                          style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
                        >
                          {product.name}
                        </h3>
                      </Link>
                    </div>
                    <button
                      onClick={() => {
                        removeItem(product.id);
                        toast(`${product.name} removed`, { duration: 1800 });
                      }}
                      className="flex-shrink-0 p-1 transition-opacity hover:opacity-70"
                      style={{ color: 'oklch(0.55 0.05 60)' }}
                      aria-label="Remove item"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-2">
                    {/* Quantity */}
                    <div
                      className="flex items-center"
                      style={{ border: '1.5px solid oklch(0.22 0.04 40)' }}
                    >
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center transition-colors hover:bg-black/5"
                        style={{ color: 'oklch(0.35 0.05 40)' }}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span
                        className="w-8 text-center text-sm font-semibold"
                        style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
                      >
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center transition-colors hover:bg-black/5"
                        style={{ color: 'oklch(0.35 0.05 40)' }}
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    {/* Price */}
                    <span
                      className="text-base font-bold"
                      style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.55 0.14 38)' }}
                    >
                      ${(product.price * quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div
              className="p-5 sticky top-20"
              style={{
                background: 'oklch(0.93 0.04 80)',
                border: '2px solid oklch(0.22 0.04 40)',
              }}
            >
              <h2
                className="text-lg font-bold mb-4"
                style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
              >
                Order Summary
              </h2>

              <div className="flex flex-col gap-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.40 0.04 50)' }}>
                    Subtotal ({totalItems} item{totalItems !== 1 ? 's' : ''})
                  </span>
                  <span style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}>
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.40 0.04 50)' }}>
                    Shipping
                  </span>
                  <span
                    style={{
                      fontFamily: 'Fraunces, serif',
                      color: shipping === 0 ? 'oklch(0.45 0.15 145)' : 'oklch(0.22 0.04 40)',
                    }}
                  >
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p
                    className="text-xs"
                    style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.55 0.14 38)' }}
                  >
                    Add ${(75 - totalPrice).toFixed(2)} more for free shipping
                  </p>
                )}
              </div>

              <div
                className="flex justify-between py-3 border-t-2 border-b-2 mb-4"
                style={{ borderColor: 'oklch(0.22 0.04 40)' }}
              >
                <span
                  className="font-bold"
                  style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
                >
                  Total
                </span>
                <span
                  className="text-xl font-bold"
                  style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.55 0.14 38)' }}
                >
                  ${orderTotal.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => toast.success('Checkout coming soon! ✦', { description: 'We\'re setting up secure payments.' })}
                className="w-full flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-all duration-150 active:scale-98"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  background: 'oklch(0.55 0.14 38)',
                  color: 'oklch(0.97 0.02 85)',
                  border: '2px solid oklch(0.22 0.04 40)',
                }}
              >
                Proceed to Checkout
                <ArrowRight size={16} />
              </button>

              <p
                className="text-center text-xs mt-3 opacity-60"
                style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.35 0.05 40)' }}
              >
                ♻️ Eco-friendly packaging · Free returns
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
