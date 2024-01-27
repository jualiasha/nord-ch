import { nodePolyfills } from "vite-plugin-node-polyfills";
import { defineConfig } from "vitest/config";
import rawPlugin from "vite-raw-plugin";

const config = defineConfig({
  test: {
    browser: {
      enabled: true,
      headless: true,
      name: "chrome",
    },
    coverage: {
      provider: "istanbul",
      include: ["src/**/*.ts", "src/**/*.js"],
    },
  },
  plugins: [
    nodePolyfills(), // Storybook/vitest workaround
    rawPlugin({ fileRegex: /\.md$/ }), // Ability to read markdown files.
  ],
});

export default config;
