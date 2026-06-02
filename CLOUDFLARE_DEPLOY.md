# Deploying ReLove Soul Finds to Cloudflare Pages

## Quick Deploy (Recommended)

### Option 1: Cloudflare Pages Dashboard (Easiest)

1. Push your code to a GitHub or GitLab repository
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click **Create a project** → **Connect to Git**
4. Select your repository
5. Configure build settings:
   - **Framework preset:** Vite
   - **Build command:** `pnpm build`
   - **Build output directory:** `dist/public`
6. Click **Save and Deploy**

Cloudflare will automatically redeploy on every push to your main branch.

---

### Option 2: Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the project
pnpm build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist/public --project-name=relove-soul-finds
```

---

## Build Configuration

| Setting | Value |
|---|---|
| Build command | `pnpm build` |
| Output directory | `dist/public` |
| Node.js version | 18+ |
| Package manager | pnpm |

## SPA Routing

The `public/_redirects` file handles client-side routing:
```
/* /index.html 200
```

This ensures all routes (e.g., `/shop`, `/product/c1`) are served correctly.

## Environment Variables

No environment variables are required for the static frontend.

## Custom Domain

1. In Cloudflare Pages dashboard, go to your project
2. Click **Custom domains** → **Set up a custom domain**
3. Follow the DNS configuration steps

## Performance Notes

- All images are served from Cloudflare CDN (already embedded as CDN URLs)
- Vite produces optimized, code-split bundles
- Fonts are loaded from Google Fonts with `display=swap`
- The site is fully static — no server required
