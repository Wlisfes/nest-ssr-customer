import { fileURLToPath, URL } from 'url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
    publicDir: resolve(__dirname, 'web', 'public'),
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {
            // @ts-ignore
            '@web': fileURLToPath(new URL('web', import.meta.url))
        }
    }
})
