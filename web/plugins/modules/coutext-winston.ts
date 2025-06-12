import type { Logger } from 'winston'
import type { Request } from 'express'

let logger: null | Logger = null
export function CoutextWinston(ssr: boolean, request?: Request) {
    return new Promise(resolve => {
        if (!ssr) {
            return resolve(console)
        } else if (logger) {
            return resolve(logger)
        }
        return import('winston').then(async winston => {
            await import('winston-daily-rotate-file')
            logger = winston.createLogger({
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
                                console.log(data)
                                return JSON.stringify(data)
                            })
                        )
                    })
                ]
            })
            return resolve(logger)
        })
    })
}
