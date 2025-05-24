import { createServer, ViteDevServer } from 'vite'
import { Request } from 'express'
import { resolve } from 'path'
import { readFileSync } from 'fs'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

let viteServer: ViteDevServer
export async function createViteServer() {
    if (viteServer) {
        return viteServer
    }
    return (viteServer = await createServer({
        root: 'web',
        logLevel: 'error',
        server: {
            middlewareMode: 'ssr'
        },
        build: {
            cssCodeSplit: false
        },
        plugins: [
            Components({
                dts: true,
                deep: true,
                extensions: ['vue'],
                dirs: [resolve(__dirname, '../../web/components')],
                resolvers: [NaiveUiResolver()]
            })
        ]
    }))
}

export const isProd = false

const template = isProd ? readFileSync(resolve(__dirname, '../build/client/index.html'), 'utf-8') : ''
const manifest = isProd ? require(resolve(__dirname, '../build/client/ssr-manifest.json')) : {}
const prodRender = isProd ? require(resolve(__dirname, '../build/server/entry-server.js')).render : async () => {}

/**Web路由渲染**/
export async function createRouteServer(request: Request) {
    if (isProd) {
        console.log(`生产环境`)
        return await prodRender(request, manifest).then(async ({ content, links, css, state }) => {
            const html = template
                .replace(`<!--app-ssr-placeholder-->`, content)
                .replace(`'<!--app--ssr-state-->'`, state)
                .replace(`<!--app-ssr-style-->`, css + links)
            return html
        })
    } else {
        console.log(`开发环境`, resolve(__dirname, '../web/index.html'))
        const vite = await createViteServer()
        const html = readFileSync(resolve(__dirname, '../web/index.html'), 'utf-8')
        const template = await vite.transformIndexHtml(request.originalUrl, html)
        return await vite.ssrLoadModule('/entry-server.ts').then(async ({ render }) => {
            const { content, links, css, state } = await render(request, {})

            const html = template
                .replace(`<!--app-ssr-placeholder-->`, content)
                .replace(`'<!--app--ssr-state-->'`, state)
                .replace(`<!--app-ssr-style-->`, css + links)
            return html
        })
    }
}
