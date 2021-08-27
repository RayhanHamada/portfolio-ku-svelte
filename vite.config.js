import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), tsConfigPaths(), WindiCSS.default()],
  server: { fs: { strict: false } },
  define: {
    'process.env': process.env,
  },
});
