import { Module } from '@nestjs/common'
import { I18nService } from '@server/modules/system/i18n/i18n.service'
import { I18nController } from '@server/modules/system/i18n/i18n.controller'
import { SteamService } from '@server/modules/system/stream/stream.service'
import { StreamController } from '@server/modules/system/stream/stream.controller'
import { ClassifyService } from '@server/modules/system/classify/classify.service'
import { ClassifyController } from '@server/modules/system/classify/classify.controller'
import { UserService } from '@server/modules/system/user/system-user.service'
import { UserController } from '@server/modules/system/user/system-user.controller'

@Module({
    imports: [],
    controllers: [I18nController, StreamController, ClassifyController, UserController],
    providers: [I18nService, SteamService, ClassifyService, UserService]
})
export class SystemModule {}
