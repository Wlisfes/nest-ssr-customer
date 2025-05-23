import { createServer, ViteDevServer } from 'vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import path from 'path'

let viteServer: ViteDevServer
export async function createViteServer() {
    if (viteServer) {
        return viteServer
    }
    return (viteServer = await createServer({
        publicDir: resolve(__dirname, '../web/public'),
        appType: 'custom',
        server: {
            hmr: true,
            middlewareMode: true
        },
        plugins: [
            Vue(),
            VueJsx(),
            UnoCSS(),
            Components({
                dts: true,
                deep: true,
                extensions: ['vue'],
                include: [/\.vue$/, /\.vue\?vue/],
                dirs: [resolve(__dirname, '../web/components')],
                resolvers: [NaiveUiResolver()]
            })
        ],
        resolve: {
            alias: {
                '@web': resolve(__dirname, '../web')
            }
        }
    }))
}
