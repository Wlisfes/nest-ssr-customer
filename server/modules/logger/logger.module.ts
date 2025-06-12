import { Module, Global } from '@nestjs/common'
import { Logger } from '@server/modules/logger/logger.service'
import { isNotEmpty } from 'class-validator'
import { WinstonModule } from 'nest-winston'
import { fetchWherer } from '@server/utils/utils-common'
import winston from 'winston'
import chalk from 'chalk'
import 'winston-daily-rotate-file'

@Global()
@Module({
    providers: [Logger],
    exports: [Logger],
    imports: [
        WinstonModule.forRoot({
            transports: [
                new winston.transports.DailyRotateFile({
                    level: 'debug',
                    dirname: `logs/server`, //日志保存的目录
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
                            const context = fetchWherer(Boolean(data.context), {
                                value: chalk.hex('#536dfe')(`日志ID:[${data.context ?? ''}]`),
                                defaultValue: ''
                            })
                            const level = fetchWherer(data.level === 'error', {
                                value: chalk.red('ERROR'),
                                fallback: chalk.green(data.level.toUpperCase())
                            })
                            const duration = fetchWherer(isNotEmpty(data.duration), {
                                value: chalk.hex('#ff3d68')(`耗时:${data.duration ?? '[]'}`),
                                defaultValue: ''
                            })
                            const module = [pid, timestamp, level, context, message].filter(isNotEmpty).join(`  `)
                            if (['LoggerMiddleware'].includes(String(data.message))) {
                                /**中间件日志**/
                                const url = fetchWherer(Boolean(data.log.url), {
                                    value: chalk.hex('#fc5404')(`接口地址:[${data.log.url ?? ''}]`, ''),
                                    defaultValue: ''
                                })
                                const text = Object.keys(data.log ?? {}).reduce((current, key) => {
                                    return (current += `	"${key.toString()}": ${JSON.stringify(data.log[key.toString()])}, \n`)
                                }, '')
                                console[data.level](`${module}  ${url}  ${duration}`, { ...data.log })
                                return `服务进程:[${process.pid}]  ${data.timestamp}  ${data.level.toUpperCase()}  上下文ID:[${data.context ?? ''}]  执行方法:[${data.message}]  接口地址:${data.log.url}  耗时:${data.duration}  {\n${text}}`
                            } else if (typeof data.log === 'string') {
                                console[data.level](`${module}  ${duration}  {\n    log: ${chalk.red(data.log)}\n}`)
                                return `${process.pid} ${data.timestamp} ${data.level.toUpperCase()}  上下文ID:[${data.context ?? ''}]  执行方法:[${data.message}]  耗时:${data.duration}  {\n    "log": ${data.log}\n}`
                            } else {
                                const text = Object.keys(data.log ?? {}).reduce((current, key) => {
                                    return (current += `	"${key.toString()}": ${JSON.stringify(data.log[key.toString()])}, \n`)
                                }, '')
                                console[data.level](`${module}  ${duration}`, { ...data.log })
                                return `服务进程:[${process.pid}]  ${data.timestamp}  ${data.level.toUpperCase()}  上下文ID:[${data.context ?? ''}]  执行方法:[${data.message}]  耗时:${data.duration}  {\n${text}}`
                            }
                        })
                    )
                })
            ]
        })
    ]
})
export class LoggerModule {}
