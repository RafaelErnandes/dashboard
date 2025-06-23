import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["electron/main.ts", "electron/preload.ts"],
  outDir: "dist-electron",
  format: ["cjs"],
  splitting: false,
  sourcemap: false,
  clean: true,
  bundle: false,
  target: "node18",
});
