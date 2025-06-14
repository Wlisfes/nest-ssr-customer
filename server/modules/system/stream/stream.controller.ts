import { Post, Get, Body, Request } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { WithController } from '@server/decorator/with.decorator'
import { ApiDecorator } from '@server/decorator/request.decorator'
import { OmixRequest } from '@server/interface/instance.resolver'
import { SteamService } from '@server/modules/system/stream/stream.service'
import * as field from '@server/interface/instance.resolver'

@ApiTags('文件存储模块')
@WithController('system/stream')
export class StreamController {
    constructor(private readonly steamService: SteamService) {}

    @Post('/image/uploader')
    @ApiDecorator({
        operation: { summary: '上传图片文件' },
        response: { status: 200, description: 'OK' }
    })
    public async httpBaseSystemStreamUploader(@Request() request: OmixRequest, @Body() body) {
        return await this.steamService.httpBaseSystemStreamUploader(request, body)
    }
}
