import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // A proxy to forward API requests to the backend server. You can either do this or configure the frontend to directly call the backend URL.
    proxy: {
      "/api": "http://localhost:8000",
    },
  },
});