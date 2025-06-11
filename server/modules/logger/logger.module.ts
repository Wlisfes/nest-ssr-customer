import { Module, Global } from '@nestjs/common'
import { Logger } from '@server/modules/logger/logger.service'
import { isNotEmpty } from 'class-validator'
import { WinstonModule } from 'nest-winston'
import * as winston from 'winston'
import * as chalk from 'chalk'
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
                    dirname: `logs`, //日志保存的目录
                    filename: '%DATE%.log', //日志名称，占位符 %DATE% 取值为 datePattern 值。
                    datePattern: 'YYYY-MM-DD', //日志轮换的频率，此处表示每天。
                    zippedArchive: true, //是否通过压缩的方式归档被轮换的日志文件。
                    maxSize: '20m', //设置日志文件的最大大小，m 表示 mb 。
                    maxFiles: '30d', //保留日志文件的最大天数，此处表示自动删除超过30天的日志文件。
                    format: winston.format.combine(winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }), winston.format.json())
                })
            ]
        })
    ]
})
export class LoggerModule {}
