import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
   },

   server: {
      open: true,
      proxy: {
         '/proxy': {
            target: 'http://localhost:5000',
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace(/^\/proxy/, ''),
         },
      },
      host: true,
      watch: {
         usePolling: true,
      },
      strictPort: true,
      port: 5173,
   },
});
