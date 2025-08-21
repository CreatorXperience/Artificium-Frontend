import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    cors: true,
    allowedHosts: true,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'certs/localhost-key.pem')),
      cert: fs.readFileSync(
        path.resolve(__dirname, 'certs/localhost-cert.pem'),
      ),
    },
  },
  plugins: [react(), tailwindcss()],
});
