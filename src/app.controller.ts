import { Controller, Get, Header, Request } from '@nestjs/common'
import { AppService } from '@/src/app.service'
// import { createViteServer } from '@/src/vite.server'
import { readFileSync } from 'fs'
import { resolve } from 'path'

@Controller(['/', '/user'])
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    @Header('Content-Type', 'text/html')
    async fetchBaseRender(@Request() request) {
        try {
            // const vite = await createViteServer()
            // const html = await vite.transformIndexHtml(
            //     request.originalUrl,
            //     readFileSync(resolve(__dirname, '../web/index.html'), { encoding: 'utf-8' })
            // )
            // const { render } = await vite.ssrLoadModule(resolve(__dirname, '../web/entry-server.ts'))
            // const { template, links, state } = await render(request)
            // return html.replace(`'<!--app--vue-state-->'`, state).replace(`<!--app-html-->`, template)

            return 'Hello'
        } catch (error) {
            return '500'
        }
    }
}
