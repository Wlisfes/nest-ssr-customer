import { Module } from '@nestjs/common'
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TransformInterceptor } from '@server/interceptor/transform.interceptor'
import { HttpExceptionFilter } from '@server/filters/http-exception.filter'
import { LoggerModule } from '@server/modules/logger/logger.module'
import { DeployModule } from '@server/modules/deploy/deploy.module'
import { WebModule } from '@server/modules/web/web.module'

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: `.env.${process.env.NODE_ENV}` }), LoggerModule, DeployModule, WebModule],
    providers: [
        { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
        { provide: APP_FILTER, useClass: HttpExceptionFilter },
        ConfigService
    ]
})
export class AppModule {}
