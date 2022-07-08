import vue from '@vitejs/plugin-vue'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import StylelintPlugin from 'vite-plugin-stylelint'

import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        cssCodeSplit: false
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    plugins: [
        vue(),

        VueI18n({
            include: [resolve(__dirname, 'locales/*yaml')]
        }),

        StylelintPlugin()
    ],

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/styles/index.scss";'
            }
        }
    },

    envPrefix: 'TEST_UI'
})
