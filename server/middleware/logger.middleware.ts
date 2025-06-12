import { Inject, Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'
import { Logger } from 'winston'
import { fetchIntNumber, fetchIPClient } from '@server/utils/utils-common'
import * as useragent from 'express-useragent'

@Injectable()
export class UserAgentMiddleware implements NestMiddleware {
    use(request: Request, response: Response, next: NextFunction) {
        useragent.express()(request, response, next)
    }
}

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    constructor(@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {}

    async use(request: Omix<Request>, response: Response, next: NextFunction) {
        console.log('LoggerMiddleware:', request)
        const date = Date.now()
        const context = fetchIntNumber()
        request.ipv4 = fetchIPClient(request)
        request.headers.datetime = date.toString()
        request.headers.context = context.toString()
        response.on('finish', () => {
            /**结束日志 endTime**/
            this.logger.info(LoggerMiddleware.name, {
                context: context.toString(),
                duration: `${Date.now() - date}ms`,
                log: {
                    url: request.originalUrl,
                    method: request.method,
                    body: request.body,
                    query: request.query,
                    params: request.params,
                    ip: request.ipv4,
                    host: request.headers.host ?? '',
                    origin: request.headers.origin ?? '',
                    referer: request.headers.referer ?? '',
                    platform: request.headers.platform,
                    device: request.headers['user-agent'] ?? ''
                }
            })
        })
        return next()
    }
}
