import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Set VITE_BASE when deploying to a sub-path, e.g. GitHub Pages: VITE_BASE=/repo-name/
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [react()],
});
