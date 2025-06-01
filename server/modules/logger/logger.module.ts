import { Module, Global } from '@nestjs/common'
import { Logger } from '@server/modules/logger/logger.service'

@Global()
@Module({
    imports: [],
    providers: [Logger],
    exports: [Logger]
})
export class LoggerModule {}
