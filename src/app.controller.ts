import { Controller, Get, Header, Request, HttpException, InternalServerErrorException } from '@nestjs/common'
import { AppService } from '@src/app.service'
import { createViteServer } from '@src/vite.server'
import { readdirSync, readFileSync } from 'fs'
import { resolve } from 'path'
import { resolveWebPath, resolveDistPath } from '@src/utils/resolve-path'

@Controller(['/', '/user'])
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    @Header('Content-Type', 'text/html')
    async fetchBaseRender(@Request() request) {
        try {
            const vite = await createViteServer()
            const html = await vite.transformIndexHtml(
                request.originalUrl,
                readFileSync(resolveWebPath('index.html'), { encoding: 'utf-8' })
            )
            const { render } = await vite.ssrLoadModule(resolveWebPath('entry-server.ts'))
            const { template, links, state } = await render(request)
            return html.replace(`'<!--app--vue-state-->'`, state).replace(`<!--app-html-->`, template)
        } catch (error) {
            return '500'
        }
    }
}
