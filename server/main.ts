import { NestExpressApplication } from '@nestjs/platform-express'
import { NestFactory } from '@nestjs/core'
import { AppModule } from '@server/app.module'
import { createViteServer } from '@server/vite.server'
import { resolve } from 'path'

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule)
    const vite = await createViteServer()
    await app.use(vite.middlewares)
    app.useStaticAssets(resolve(__dirname, '../build/client'), { index: false })
    await app.listen(process.env.NODE_PORT)
    console.log(`Nest服务启动[${process.env.NODE_ENV}]:`, `http://localhost:${process.env.NODE_PORT}`)
}
bootstrap()
