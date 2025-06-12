import { type Logger } from 'winston'
import { type Request } from 'express'
import { isNotEmpty } from 'class-validator'
import { fetchWherer } from '@/utils/utils-common'
import chalk from 'chalk'

/**封装日志输出包**/
export class WinstonService {
    static instance: WinstonService
    static initialize: boolean = false
    constructor(
        private readonly ssr: boolean,
        private readonly logger: Logger
    ) {
        if (!WinstonService.instance) {
            WinstonService.initialize = true
            WinstonService.instance = this
        }
        return WinstonService.instance
    }

    public static async fetchInitialize(initialize: boolean) {
        return (WinstonService.initialize = initialize)
    }

    public info(message: string, log) {
        if (this.ssr) {
            this.logger.info(message, { log })
        } else {
            console.info(message, ...log)
        }
        return this
    }

    public error(message: string, log) {
        if (this.ssr) {
            this.logger.error(message, { log })
        } else {
            console.error(message, ...log)
        }
        return this
    }
}

export function CoutextWinston(ssr: boolean, request?: Request): Promise<WinstonService> {
    return new Promise(resolve => {
        if (!ssr) {
            return resolve(console as never)
        } else if (WinstonService.instance && WinstonService.initialize) {
            return resolve(WinstonService.instance)
        }
        return import('winston').then(async winston => {
            await import('winston-daily-rotate-file')
            await WinstonService.fetchInitialize(true)
            const logger = winston.createLogger({
                transports: [
                    new winston.transports.DailyRotateFile({
                        level: 'debug',
                        dirname: `logs/web`, //日志保存的目录
                        filename: '%DATE%.log', //日志名称，占位符 %DATE% 取值为 datePattern 值。
                        datePattern: 'YYYY-MM-DD', //日志轮换的频率，此处表示每天。
                        zippedArchive: true, //是否通过压缩的方式归档被轮换的日志文件。
                        maxSize: '20m', //设置日志文件的最大大小，m 表示 mb 。
                        maxFiles: '30d', //保留日志文件的最大天数，此处表示自动删除超过30天的日志文件。
                        format: winston.format.combine(
                            winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
                            winston.format.json(),
                            winston.format.printf((data: Omix) => {
                                const pid = chalk.hex('#fc5404 ')(`服务进程:[${process.pid}]`)
                                const timestamp = chalk.hex('#fb9300')(`${data.timestamp}`)
                                const message = chalk.hex('#ff3d68')(`执行方法:[${data.message}]`)
                                const level = fetchWherer(data.level === 'error', {
                                    value: chalk.red('ERROR'),
                                    fallback: chalk.green(data.level.toUpperCase())
                                })
                                const log = fetchWherer(data.log instanceof Error, {
                                    value: (data.log as Error).stack,
                                    fallback: JSON.stringify(data.log)
                                })
                                console[data.level](`${[pid, timestamp, level, message].filter(isNotEmpty).join(`  `)}`, log)
                                return `服务进程:[${process.pid}]  ${data.timestamp}  ${data.level.toUpperCase()}  执行方法:[${data.message}]  ${log}`
                            })
                        )
                    })
                ]
            })
            return resolve(new WinstonService(ssr, logger))
        })
    })
}
