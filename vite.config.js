import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/', // 🔥 must match GitHub repo name exactly
  plugins: [react()],
});
