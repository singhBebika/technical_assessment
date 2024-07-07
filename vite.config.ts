import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve("src/"),
      "@src": path.resolve("src"),
      "@src/components": path.resolve("src/components"),
      "@src/redux": path.resolve("src/redux"),
      "@src/hooks": path.resolve("src/hooks"),
    },
  },
});
