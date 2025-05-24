import { Module } from '@nestjs/common'
import { AppController } from '@server/app.controller'
import { AppService } from '@server/app.service'

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
