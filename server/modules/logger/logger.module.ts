import { Module, Global } from '@nestjs/common'
import { Logger } from '@server/modules/logger/logger.service'
import { isNotEmpty } from 'class-validator'
import { WinstonModule } from 'nest-winston'
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
                        winston.format.printf(data => {
                            const pid = chalk.hex('#fc5404 ')(`服务进程:[${process.pid}]`)
                            const timestamp = chalk.hex('#fb9300')(`${data.timestamp}`)
                            const message = chalk.hex('#ff3d68')(`执行方法:[${data.message}]`)

                            return JSON.stringify(data)
                        })
                    )
                })
            ]
        })
    ]
})
export class LoggerModule {}
