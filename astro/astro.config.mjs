// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 3000,
  },

  output: "server",

  adapter: node({
    mode: "standalone",
  }),
});
