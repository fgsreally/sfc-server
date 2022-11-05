import { defineConfig, PluginOption } from "vite";
import { pureServer } from "sfc-server/plugin";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [pureServer()],
  resolve: {
    alias: { "sfc-server": "sfc-server/server" },
  },
  build: {
    outDir: "dist/server",
    lib: {
      formats: ["cjs"],
      entry: "src/server.ts",
    },
    rollupOptions: {
      external: ["sfc-server/server",'express'],
    },
  },
});
