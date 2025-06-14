import { Module } from '@nestjs/common'
import { I18nService } from '@server/modules/system/i18n/i18n.service'
import { I18nController } from '@server/modules/system/i18n/i18n.controller'
import { UserService } from '@server/modules/system/user/system-user.service'
import { UserController } from '@server/modules/system/user/system-user.controller'

@Module({
    imports: [],
    controllers: [I18nController, UserController],
    providers: [I18nService, UserService]
})
export class SystemModule {}
