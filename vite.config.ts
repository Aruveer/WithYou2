import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Fix: Cast process to any to avoid type error about cwd() missing on Process interface
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
    build: {
      outDir: 'dist',
    }
  };
});