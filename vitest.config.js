import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    svelte({
      hot: false,
      preprocess: vitePreprocess(),
    }),
  ],
  resolve: {
    alias: {
      "svelte-toggle": path.resolve("src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
