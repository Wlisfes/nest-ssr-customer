import { Controller, Post, Get, Body, Request } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ApiDecorator } from '@server/decorator/request.decorator'
import { OmixRequest } from '@server/interface/instance.resolver'
import { UserService } from '@server/modules/system/user/system-user.service'

@ApiTags('用户模块')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/register')
    @ApiDecorator({
        operation: { summary: '注册账号' },
        response: { status: 200, description: 'OK' }
        // authorize: {  platform: 'client' }
    })
    public async httpBaseSystemUserRegister(@Request() request: OmixRequest) {
        return await this.userService.httpBaseSystemUserRegister(request)
    }
}
