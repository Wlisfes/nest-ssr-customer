import { Post, Get, Body, Request } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { WithController } from '@server/decorator/with.decorator'
import { ApiDecorator } from '@server/decorator/request.decorator'
import { OmixRequest } from '@server/interface/instance.resolver'
import { I18nService } from '@server/modules/system/i18n/i18n.service'
import * as field from '@server/interface/instance.resolver'

@ApiTags('国际化模块')
@WithController('system/i18n')
export class I18nController {
    constructor(private readonly i18nService: I18nService) {}

    @Post('/create')
    @ApiDecorator({
        operation: { summary: '新增国际化' },
        response: { status: 200, description: 'OK' }
    })
    public async httpBaseSystemI18nCreate(@Request() request: OmixRequest, @Body() body: field.BaseSystemI18nCreate) {
        return await this.i18nService.httpBaseSystemI18nCreate(request, body)
    }
}
