import { Inject, Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'
import { Logger } from 'winston'
import { fetchIntNumber } from '@server/utils/utils-common'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    constructor(@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {}

    async use(request: Omix<Request>, response: Response, next: NextFunction) {
        const { baseUrl, method, body, query, params, headers } = request
        const date = Date.now()
        const context = fetchIntNumber({ bit: 32 })
        request.headers.datetime = date.toString()
        request.headers.context = context.toString()
        response.on('finish', () => {
            /**结束日志 endTime**/
            this.logger.info(LoggerMiddleware.name, {
                context: context.toString(),
                duration: `${Date.now() - date}ms`,
                log: {
                    url: baseUrl,
                    method,
                    body,
                    query,
                    params,
                    host: headers.host ?? '',
                    origin: headers.origin ?? '',
                    referer: headers.referer ?? '',
                    platform: headers.platform,
                    device: headers['user-agent'] ?? ''
                    // user: request.user ? utils.pick(request.user, ['name', 'uid']) : {}
                }
            })
        })
        return next()
    }
}
