# Cloudflare Pages Setup Checklist

## ✓ Local Configuration (Already Done)

- [x] `wrangler.toml` - Cloudflare Pages configuration
- [x] `_worker.js` - Smart routing and caching rules
- [x] `.env.production.example` - Environment variables template
- [x] Build scripts - `npm run build:prod` and `npm run deploy`
- [x] Build verification - Tested locally

## ☐ Cloudflare Dashboard Setup (Your Action Required)

### Phase 1: Project Creation (5 minutes)
- [ ] Create Cloudflare account at https://dash.cloudflare.com (if needed)
- [ ] Add your domain to Cloudflare (or use a subdomain)
- [ ] Verify nameservers are configured

### Phase 2: Pages Project Setup (10 minutes)
- [ ] Go to **Workers & Pages** → **Pages**
- [ ] Click **"Create application"** → **"Connect to Git"**
- [ ] Authorize GitHub access
- [ ] Select repository: `FeLAA-Atelier-ReLove-Soul-Finds`
- [ ] Project name: `relove-soul-finds`
- [ ] Production branch: `main`

### Phase 3: Build Configuration (5 minutes)
- [ ] Build command: `npm run build:prod`
- [ ] Build output directory: `dist/public`
- [ ] **DO NOT add root_dir** (we're using the project root)

### Phase 4: Environment Variables (5 minutes)
In **Settings** → **Environment variables** → **Production**:

- [ ] `NODE_ENV` = `production`
- [ ] `BUILT_IN_FORGE_API_URL` = `https://your-backend-api-url`
- [ ] `BUILT_IN_FORGE_API_KEY` = `your-api-key`
- [ ] (Add any other environment variables your app needs)

### Phase 5: Custom Domain (Optional, 5 minutes)
- [ ] Go to **Custom domains**
- [ ] Add your domain: `relove.yourdomain.com` (or subdomain)
- [ ] Update DNS CNAME record (Cloudflare will show you the values)
- [ ] Wait for DNS propagation (5 minutes - 24 hours)

### Phase 6: Verify Deployment (5 minutes)
- [ ] Go to **Deployments** tab
- [ ] Wait for initial build to complete
- [ ] Check for any build errors
- [ ] Test your deployed URL

## Environment Variables Reference

Copy the `.env.production.example` to `.env.production` locally and fill in your actual values:

```env
NODE_ENV=production
BUILT_IN_FORGE_API_URL=https://api.your-backend.com
BUILT_IN_FORGE_API_KEY=sk_live_xxxxx
```

These values go into Cloudflare **Settings** → **Environment variables** → **Production**.

## Deploy Command (for manual deploys)

If you want to deploy manually without GitHub integration:

```bash
# Install Wrangler (one time)
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build and deploy
npm run deploy
```

## After Deployment

- **First deployment:** Can take 2-5 minutes for build + deploy
- **Subsequent deployments:** Usually 1-2 minutes
- **DNS propagation:** 5 minutes to 24 hours for custom domains
- **Cache invalidation:** Up to 1 minute for content to refresh

## Monitoring

1. **Deployments** - Track build status and history
2. **Analytics** - View traffic, errors, and performance
3. **Build logs** - Debug build failures

## Support

- Cloudflare Docs: https://developers.cloudflare.com/pages/
- Pages Troubleshooting: https://developers.cloudflare.com/pages/troubleshooting/

## Quick Links

- **Cloudflare Dashboard:** https://dash.cloudflare.com
- **Your Pages Projects:** https://dash.cloudflare.com/pages

---

**Estimated total Cloudflare setup time: 25-35 minutes**
