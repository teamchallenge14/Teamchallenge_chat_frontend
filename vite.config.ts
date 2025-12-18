import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// Using function syntax to access 'mode' (dev/prod) for env variables
export default defineConfig(({ mode }) => {
  // Load env variables manually to use them in the config (e.g. for proxy)
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 5173,
      // Proxy setup to avoid CORS issues during development
      proxy: {
        "/api": {
          target: env.VITE_API_URL || "http://localhost:3000",
          changeOrigin: true,
          secure: false,
          // Uncomment rewrite if the backend routes don't start with /api
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    build: {
      outDir: "dist",
    },
  };
});
