import { createServer, ViteDevServer } from 'vite'
import { resolve } from 'path'

let viteServer: ViteDevServer
export async function createViteServer() {
    if (viteServer) {
        return viteServer
    }
    return (viteServer = await createServer({
        publicDir: resolve(__dirname, '../web/public'),
        appType: 'custom',
        server: {
            middlewareMode: true
        }
    }))
}
