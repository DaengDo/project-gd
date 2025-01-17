import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import styleX from "vite-plugin-stylex";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), styleX()],
  base: "/project-gd/",
});
