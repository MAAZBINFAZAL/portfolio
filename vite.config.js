import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",   // FIXED — required for custom domain
  plugins: [react()],
});
