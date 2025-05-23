import { createServer, ViteDevServer } from 'vite'
import { resolve } from 'path'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

let viteServer: ViteDevServer
export async function createViteServer() {
    if (viteServer) {
        return viteServer
    }
    return (viteServer = await createServer({
        publicDir: resolve(__dirname, '../../web/public'),
        define: {
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true'
        },
        server: {
            middlewareMode: 'ssr'
        },
        plugins: [
            Vue(),
            VueJsx(),
            Components({
                dts: true,
                deep: true,
                extensions: ['vue'],
                dirs: [resolve(__dirname, '../../web/components')],
                resolvers: [NaiveUiResolver()]
            })
        ],
        resolve: {
            alias: {
                '@': resolve(__dirname, '../../')
            }
        }
    }))
}
