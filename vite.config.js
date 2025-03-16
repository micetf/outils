import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    base: "./",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: "dist", // Pour maintenir la compatibilité avec votre .htaccess
        assetsDir: "assets",
    },

    publicDir: "public",
});
