# Production Deployment Guide - Cloudflare Pages

This guide covers deploying ReLove Soul Finds to Cloudflare Pages.

## Local Setup (Completed ✓)

The following has been configured locally:

- ✓ `wrangler.toml` - Cloudflare Pages configuration
- ✓ `_worker.js` - Request handling and routing logic
- ✓ `.env.production.example` - Environment variables template
- ✓ Build scripts in `package.json`

## What You Need to Do in Cloudflare

### Step 1: Create a Cloudflare Account (if you don't have one)
- Go to https://dash.cloudflare.com
- Sign up for a free account

### Step 2: Set Up Your Domain
- Add your domain to Cloudflare
- Update your domain's nameservers to point to Cloudflare (instructions in Cloudflare dashboard)
- Or use a subdomain with CNAME pointing to Cloudflare

### Step 3: Create a Cloudflare Pages Project
1. In Cloudflare Dashboard, navigate to **Workers & Pages** → **Pages**
2. Click **"Create application"**
3. Select **"Connect to Git"**
   - Authorize GitHub/GitLab access
   - Select your `FeLAA-Atelier-ReLove-Soul-Finds` repository
   - Click **"Begin setup"**

### Step 4: Configure Build Settings
When setting up the Pages project:

**Project name:** `relove-soul-finds` (or your preferred name)

**Production branch:** `main`

**Build command:**
```bash
npm run build:prod
```

**Build output directory:** `public`

**Environment variables (add these):**
```
NODE_ENV=production
BUILT_IN_FORGE_API_URL=[your backend API URL]
BUILT_IN_FORGE_API_KEY=[your API key]
```

### Step 5: Connect Custom Domain (Optional)
1. In Pages project settings → **Custom domains**
2. Click **"Set up custom domain"**
3. Enter your domain (e.g., `relove.yourdomain.com`)
4. Follow the CNAME setup instructions

### Step 6: Configure Production Environment
1. In Pages project → **Settings** → **Environment variables**
2. Add variables in the **Production** environment:
   - `NODE_ENV` = `production`
   - `BUILT_IN_FORGE_API_URL` = Your backend URL
   - `BUILT_IN_FORGE_API_KEY` = Your API key
   - Any other environment variables your app needs

### Step 7: Configure Secrets (if needed)
1. In Pages project → **Settings** → **Production**
2. Add any sensitive values as secrets (they won't be visible in logs)

## Manual Deployment (if not using GitHub auto-deploy)

After local setup, you can deploy manually:

```bash
# Install Wrangler CLI globally
npm install -g wrangler

# Authenticate with Cloudflare
wrangler login

# Build and deploy
npm run deploy
```

## Build Process

The deployment process:

1. **Local build** (`npm run build:prod`):
   - Builds React frontend with Vite → `dist/public/`
   - Bundles Express server → `dist/index.js` (for reference)

2. **Cloudflare deployment**:
   - Takes everything from `dist/public/`
   - Uses `_worker.js` for request routing and caching
   - Serves static files with optimized cache headers

## Cache Strategy

- **Static assets** (JS, CSS, fonts, images with content hashes): 1 year cache
- **HTML files**: No cache (always fresh)
- **API routes**: Passed through (configure backend separately)

## Monitoring & Logs

View deployment logs in Cloudflare dashboard:
1. Go to **Pages** → Your project
2. Click **"Deployments"** to see build/deploy status
3. Click **"Analytics"** for traffic and performance metrics

## Troubleshooting

### Builds failing?
- Check **Deployments** page for error logs
- Verify build command matches `npm run build:prod`
- Check output directory is `dist/public`

### Assets not loading?
- Check `_worker.js` cache headers are correct
- Verify file paths in build output
- Check Cloudflare cache status (purge if needed)

### Custom domain not working?
- Verify DNS settings are propagated (can take 24-48 hours)
- Check CNAME records in Cloudflare DNS settings

## Next Steps

1. **Commit local configuration:**
   ```bash
   git add wrangler.toml _worker.js .env.production.example
   git commit -m "Configure for Cloudflare Pages production deployment"
   git push
   ```

2. **Set up in Cloudflare Dashboard** (follow Step 3-7 above)

3. **Test deployment:**
   - Push a test commit
   - Watch deployment in Cloudflare dashboard
   - Verify at your deployed URL

4. **Set up monitoring:**
   - Configure alerts for build failures
   - Monitor error rates in Analytics
