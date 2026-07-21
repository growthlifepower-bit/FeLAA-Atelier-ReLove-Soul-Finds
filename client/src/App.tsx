// ==========================================================================
// ReLove Soul Finds — App Root
// Routes, providers, and global layout
// Design: Soul Market — Warm Brutalist Vintage
// ==========================================================================

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import BottomNav from "@/components/BottomNav";
import TopNav from "@/components/TopNav";
import { CartProvider } from "@/contexts/CartContext";
import Cart from "@/pages/Cart";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";
import SearchPage from "@/pages/SearchPage";
import Shop from "@/pages/Shop";
import Wishlist from "@/pages/Wishlist";
import FeLAAAbout from "@/pages/FeLAAAbout";
import ReloveCollection from "@/pages/ReloveCollection";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { toast } from "sonner";

// Placeholder pages for footer links
function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen pb-safe flex flex-col items-center justify-center text-center px-4">
      <p className="text-4xl mb-4" style={{ fontFamily: 'Courier Prime, monospace' }}>✦</p>
      <h1
        className="text-3xl font-bold mb-3"
        style={{ fontFamily: 'Fraunces, serif', color: 'oklch(0.22 0.04 40)' }}
      >
        {title}
      </h1>
      <p
        className="text-sm max-w-xs"
        style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.50 0.04 55)' }}
      >
        This page is coming soon. Check back later!
      </p>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/cart" component={Cart} />
      <Route path="/search" component={SearchPage} />
      <Route path="/wishlist" component={Wishlist} />
      <Route path="/about" component={FeLAAAbout} />
      <Route path="/felaa" component={FeLAAAbout} />
      <Route path="/relove-soul-finds" component={ReloveCollection} />
      <Route path="/relove" component={ReloveCollection} />
      <Route path="/contact" component={() => <PlaceholderPage title="Contact" />} />
      <Route path="/shipping" component={() => <PlaceholderPage title="Shipping Info" />} />
      <Route path="/returns" component={() => <PlaceholderPage title="Returns Policy" />} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <CartProvider>
          <TooltipProvider>
            <Toaster
              position="top-center"
              toastOptions={{
                style: {
                  fontFamily: 'DM Sans, sans-serif',
                  background: 'oklch(0.22 0.04 40)',
                  color: 'oklch(0.97 0.02 85)',
                  border: '2px solid oklch(0.35 0.05 40)',
                  borderRadius: '2px',
                },
              }}
            />
            {/* Top nav — visible on all screen sizes, hides on mobile for bottom nav */}
            <TopNav />
            {/* Main content */}
            <main>
              <Router />
            </main>
            {/* Bottom nav — mobile only */}
            <BottomNav />
          </TooltipProvider>
        </CartProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
