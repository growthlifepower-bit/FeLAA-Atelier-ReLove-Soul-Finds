# ReLove Soul Finds + FeLAA Atelier — Cloudflare Pages Deployment

## Quick Start

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Add FeLAA Atelier integration and prepare for deployment"
git push origin main
```

### Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** → **Create a project**
3. Select **Connect to Git**
4. Authorize GitHub and select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist/public`
   - **Root directory:** (leave blank)

### Step 3: Environment Variables (Optional)

If you add environment variables in the future, set them in Cloudflare Pages settings:
- Go to your project → **Settings** → **Environment variables**
- Add any required variables

### Step 4: Deploy

Click **Save and Deploy**. Cloudflare will automatically:
- Build your project
- Deploy to a preview URL
- Provide a production domain (e.g., `yoursite.pages.dev`)

## Custom Domain

To use your own domain:

1. In Cloudflare Pages project settings, go to **Custom domains**
2. Add your domain
3. Follow DNS configuration instructions
4. SSL/TLS is automatically enabled

## What's Deployed

✅ **ReLove Soul Finds** — Full thrift store with:
- Product catalog (Collectibles, Clothing, Toys, Furniture)
- Shopping cart (localStorage-backed)
- Product search
- Wishlist
- Responsive mobile-first design

✅ **FeLAA Atelier** — Integrated brand with:
- About page (`/felaa` or `/about`)
- Three disciplines: Couture, Textile, Pattern
- Beautiful hero imagery
- Links to unified shop

✅ **Unified Store** — All products in one shop:
- Category filtering
- Price sorting
- Tide payment integration ready

## Tide Payment Setup

To enable checkout:

1. Generate Tide payment links in your Tide dashboard
2. Update product data in `client/src/lib/products.ts` with `tideLink` field
3. When users click "Buy Now", they'll see a modal to paste the Tide link
4. Clicking "Open Tide" opens the payment in a new window

## Building Locally

```bash
npm install
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Build for production
npm run preview  # Preview production build
```

## File Structure

```
client/
  src/
    pages/          ← All page components
      Home.tsx      ← ReLove home with FeLAA mention
      Shop.tsx      ← Unified store
      FeLAAAbout.tsx ← FeLAA Atelier page
    components/     ← Reusable UI components
    lib/            ← Product data, utilities
    contexts/       ← Cart state management
    index.css       ← Global styles (warm palette)
```

## Design System

All pages use the **Soul Market** warm brutalist aesthetic:
- **Colors:** Terracotta, Clay, Mustard, Blush, Canvas, Ink
- **Typography:** Fraunces (display), DM Sans (body), Courier Prime (labels)
- **Components:** Stamp-card borders, torn dividers, spring animations

## Support

For questions about deployment or customization, refer to:
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
- [React Documentation](https://react.dev)
