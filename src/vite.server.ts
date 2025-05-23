import { createServer, ViteDevServer } from 'vite'
import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

let viteServer: ViteDevServer
export async function createViteServer() {
    if (viteServer) {
        return viteServer
    }
    return (viteServer = await createServer({
        publicDir: resolve(__dirname, '../../web/public'),
        appType: 'custom',
        server: { middlewareMode: true },
        plugins: [Vue(), VueJsx()],
        resolve: {
            alias: {
                '@': resolve(__dirname, '../../')
            }
        }
    }))
}
