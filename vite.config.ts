/// <reference types="vitest/config" />
import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    // proxy: {
    //   '/v1': {
    //     target: 'https://dev-api.alicesocial.pp.ua',
    //     changeOrigin: true,
    //     secure: false,
    //     // rewrite: (path) => path.replace(/^\/v1/, ''),
    //     // rewrite: (path) => path.replace(/^\/v1/, '/api'),
    //     configure: (proxy) => {
    //       proxy.on('proxyReq', (_proxyReq, req) => {
    //         console.log('🚀 ПРОКСИ ПЕРЕХВАТИЛ:', req.method, req.url);
    //       });
    //       proxy.on('proxyRes', (proxyRes, req) => {
    //         console.log('Ответ от бэкенда:', proxyRes.statusCode, req.url);
    //       });
    //     },
    //   },
    //   '/interests': {
    //     target: 'https://dev-api.alicesocial.pp.ua',
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
