//vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig ({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.jsx"),
      name: "boardgame",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-router", "react-router-dom"],
      output: {
        globals: {
          react: "React",
          "react-router-dom": "reactRouterDom"
        }
      }
    },
  },
});
