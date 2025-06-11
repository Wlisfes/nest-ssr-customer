import { Module } from '@nestjs/common'
import { UserService } from '@server/modules/system/user/system-user.service'
import { UserController } from '@server/modules/system/user/system-user.controller'

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService]
})
export class SystemModule {}
