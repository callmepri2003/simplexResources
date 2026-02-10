import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const isBuild = command === "build";

  return {
    plugins: [
      react(),
      isBuild
    ].filter(Boolean), // Remove false plugins (e.g., if isBuild is false)
  };
});
