import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
<<<<<<< HEAD
  // For GitHub Pages at https://nesrine-fl.github.io/fitgym/
  // base must match the repo name, including the trailing slash.
  base: "/fitgym/",
=======
base: "/fitgym/",
>>>>>>> c89420ccb77b754151d4d53deaa5b98d432a58a5
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
});
