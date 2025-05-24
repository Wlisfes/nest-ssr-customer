import { Controller, Get, Header, Req } from '@nestjs/common'
import { createRouteServer } from '@server/vite.server'

@Controller(['/', '/about'])
export class AppController {
    @Get()
    @Header('Content-Type', 'text/html')
    async fetchBaseRender(@Req() request) {
        try {
            return await createRouteServer(request)
        } catch (error) {
            console.log(error)
            return '500'
        }
    }
}
