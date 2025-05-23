import { defineConfig } from 'vite'
import { resolve } from 'path'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

export default defineConfig({
    publicDir: resolve(__dirname, './public'),
    plugins: [
        Vue(),
        VueJsx(),
        // UnoCSS(),
        // AutoImport({
        //     imports: ['vue', { 'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'] }]
        // }),
        Components({
            dts: true,
            deep: true,
            extensions: ['vue'],
            include: [/\.vue$/, /\.vue\?vue/],
            // dirs: [resolve(__dirname, 'web/components')],
            resolvers: [NaiveUiResolver()]
        })
    ],
    resolve: {
        alias: {
            '@web': resolve(__dirname, './')
        }
    },
    server: {
        hmr: true
    }
})
