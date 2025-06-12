import { Post, Get, Body, Request } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { WithController } from '@server/decorator/with.decorator'
import { ApiDecorator } from '@server/decorator/request.decorator'
import { OmixRequest } from '@server/interface/instance.resolver'
import { UserService } from '@server/modules/system/user/system-user.service'
import * as field from '@server/interface/instance.resolver'

@ApiTags('用户模块')
@WithController('system/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/register')
    @ApiDecorator({
        operation: { summary: '注册账号' },
        response: { status: 200, description: 'OK' }
        // authorize: {  platform: 'client' }
    })
    public async httpBaseSystemUserRegister(@Request() request: OmixRequest, @Body() body: field.BaseSystemUserRegister) {
        return await this.userService.httpBaseSystemUserRegister(request, body)
    }
}
