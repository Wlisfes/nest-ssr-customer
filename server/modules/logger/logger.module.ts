import { Module, Global } from '@nestjs/common'
import { Logger } from '@server/modules/logger/logger.service'
import * as utils from '@/utils/utils-common'
import * as chalk from 'chalk'
import 'winston-daily-rotate-file'

@Global()
@Module({
    imports: [],
    providers: [Logger],
    exports: [Logger]
})
export class LoggerModule {}
