import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

const PATHS = {
    src: path.resolve(__dirname, "src"),
    build: path.resolve(__dirname, "dist"),
};

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: PATHS.build,
        target: "es6",
        assetsDir: "./",
        minify: true,
        minifyOptions: {
            uglifyjs2: {
                compress: true,
                mangle: true,
                output: {
                    comments: false,
                },
            },
        },
        emptyOutDir: true,
        include: ["src/components/**/*"],
    },
    resolve: {
        alias: {
            "@": PATHS.src,
        },
        extensions: [".tsx", ".ts", ".js"],
    },
});
