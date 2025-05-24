import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AppController } from '@server/app.controller'
import { AppService } from '@server/app.service'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.env.${process.env.NODE_ENV}`
        })
    ],
    controllers: [AppController],
    providers: [ConfigService, AppService]
})
export class AppModule {}
