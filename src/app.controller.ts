import { Controller, Get, Header, Req } from '@nestjs/common'
import { AppService } from '@/src/app.service'
import { createViteServer } from '@/src/vite.server'
import { readFileSync } from 'fs'
import { resolve } from 'path'

@Controller(['/', '/user'])
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    @Header('Content-Type', 'text/html')
    async fetchBaseRender(@Req() request) {
        try {
            const vite = await createViteServer()

            const html = await vite.transformIndexHtml(
                request.originalUrl,
                readFileSync(resolve(__dirname, '../../web/index.html'), { encoding: 'utf-8' })
            )
            const { render } = await vite.ssrLoadModule(resolve(__dirname, '../../web/entry-server.ts'))
            const { template, style, state } = await render(request.originalUrl)
            return html
                .replace(`'<!--app--ssr-state-->'`, state)
                .replace(`<!--app-ssr-style-->`, style)
                .replace(`<!--app-ssr-placeholder-->`, template)
        } catch (error) {
            console.log(error)
            return '500'
        }
    }
}
