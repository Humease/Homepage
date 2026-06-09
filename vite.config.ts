import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import sitemap from 'vite-plugin-sitemap';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const prerender = require('vite-plugin-prerender');
const PuppeteerRenderer = prerender.PuppeteerRenderer;

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
  '/consulting/ai-consulting',
  '/jtbd/e-discovery',
  '/jtbd/internal-control',
  '/jtbd/exchange-archive',
  '/jtbd/ai-transformation',
  '/jtbd/ai-consulting',
  '/services/e-discovery',
  '/services/internal-control',
  '/services/exchange-archive',
  '/services/ai-transformation',
  '/services/ai-consulting',
  '/admin',
];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/',
    plugins: [
      react(), 
      tailwindcss(),
      // 프리렌더링 설정
      prerender({
        staticDir: path.join(__dirname, 'dist'),
        routes: routes,
        renderer: new PuppeteerRenderer({
          renderAfterTime: 5000,
          headless: true,
        }),
      }),
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
