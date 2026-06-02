/**
 * Cloudflare Pages Function
 * Handles routing and serves the Vite SPA with proper cache headers
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Skip non-GET/HEAD requests
    if (!['GET', 'HEAD'].includes(request.method)) {
      return new Response('Method Not Allowed', { status: 405 });
    }

    // API routes and special paths - proxy to backend if needed
    if (pathname.startsWith('/api/') || pathname.startsWith('/manus-storage')) {
      // For now, return 404 if no backend configured
      return new Response('Not Found', { status: 404 });
    }

    // Asset files - aggressive caching
    if (
      pathname.match(/\.(js|css|woff2?|ttf|eot|svg|jpg|jpeg|png|gif|webp|ico|json)$/) &&
      !pathname.includes('/index.html')
    ) {
      // Use immutable cache for hashed assets (Vite adds hashes to filenames)
      const response = await ctx.env.ASSETS.fetch(request);
      if (response.status === 200) {
        const headers = new Headers(response.headers);
        headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers,
        });
      }
    }

    // HTML files - no cache to ensure fresh content
    if (pathname.endsWith('.html') || pathname === '/') {
      const response = await ctx.env.ASSETS.fetch(request);
      if (response.status === 200) {
        const headers = new Headers(response.headers);
        headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers,
        });
      }
    }

    // SPA routing fallback - serve index.html for all other routes
    const indexResponse = await ctx.env.ASSETS.fetch(
      new Request(new URL('/index.html', request.url), {
        headers: request.headers,
      })
    );

    if (indexResponse.status === 200) {
      const headers = new Headers(indexResponse.headers);
      headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
      return new Response(indexResponse.body, {
        status: 200,
        statusText: 'OK',
        headers,
      });
    }

    return new Response('Not Found', { status: 404 });
  },
};
