import { Module } from '@nestjs/common'
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TransformInterceptor } from '@server/interceptor/transform.interceptor'
import { HttpExceptionFilter } from '@server/filters/http-exception.filter'
import { AppController } from '@server/app.controller'
import { AppService } from '@server/app.service'
import { LoggerModule } from '@server/modules/logger/logger.module'

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: `.env.${process.env.NODE_ENV}` }), LoggerModule],
    controllers: [AppController],
    providers: [
        { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
        { provide: APP_FILTER, useClass: HttpExceptionFilter },
        ConfigService,
        AppService
    ]
})
export class AppModule {}
