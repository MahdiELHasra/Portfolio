import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import svgr from "vite-plugin-svgr";
// import vitePluginRequire from "vite-plugin-require";

export default defineConfig({
  plugins: [
    react(),
    // vitePluginRequire(),
    // svgr({
    //   include: "**/*.svg",
    // }),
  ],
});
