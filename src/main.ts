import { NestExpressApplication } from '@nestjs/platform-express'
import { NestFactory } from '@nestjs/core'
import { AppModule } from '@/src/app.module'
import { createViteServer } from '@/src/vite.server'
import * as compression from 'compression'

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule)
    const vite = await createViteServer()
    await app.use(vite.middlewares)
    await app.listen(5480)
    console.log(`Nest服务启动:`, `http://localhost:5480`)
}
bootstrap()
