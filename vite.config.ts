import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";


// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // 👈 Important: makes the server listen on 0.0.0.0
    port: 5173,
    strictPort: true,
    origin: undefined,
    cors: true,
    // 👇 Add this to allow all hosts (e.g., *.ngrok-free.app)
    allowedHosts: true,
  },
  plugins: [react(), tailwindcss()],
});
