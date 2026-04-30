const fs = require('fs');
const path = require('path');

const routes = [
  '/',
  '/about',
  '/solutions',
  '/contact',
  '/ai-services',
  '/consulting/e-discovery',
  '/consulting/internal-control',
  '/consulting/exchange-archive',
  '/consulting/ai-transformation',
];

const hostname = 'https://www.humease.com';
const lastmod = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${hostname}${route === '/' ? '' : route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'dist', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully in dist/sitemap.xml');
