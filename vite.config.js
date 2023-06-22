import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => {
                        return tag.startsWith("swiper-");
                    },
                },
            },
        }),
        laravel({
            input: ["resources/js/app.js"],
            ssr: "resources/js/ssr.js",
            refresh: true,
        }),
    ]
});
