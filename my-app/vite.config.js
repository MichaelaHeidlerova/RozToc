import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './src',
  publicDir: '../public',
  base: '/RozToc/',
  server: {
    hmr: true,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: 'es2022',
    inputGlobPatterns: ['src/pages/**/*.html'],
    modulePreload: {
      resolveDependencies: false,
    },
  },
  plugins: [react()],
});
