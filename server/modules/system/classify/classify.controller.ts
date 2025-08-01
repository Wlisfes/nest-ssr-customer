import { Post, Get, Body, Request } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { WithController } from '@server/decorator/with.decorator'
import { ApiDecorator } from '@server/decorator/request.decorator'
import { OmixRequest } from '@server/interface/instance.resolver'
import { ClassifyService } from '@server/modules/system/classify/classify.service'
import * as field from '@server/interface/instance.resolver'

@ApiTags('产品系列模块')
@WithController('system/classify')
export class ClassifyController {
    constructor(private readonly classifyService: ClassifyService) {}

    @Post('/create')
    @ApiDecorator({
        operation: { summary: '新增产品系列' },
        response: { status: 200, description: 'OK' }
    })
    public async httpBaseClassifyCreate(@Request() request: OmixRequest, @Body() body: field.BaseClassifyCreate) {
        return await this.classifyService.httpBaseClassifyCreate(request, body)
    }

    @Post('/skill/create')
    @ApiDecorator({
        operation: { summary: '新增产品系列配置' },
        response: { status: 200, description: 'OK' }
    })
    public async httpBaseClassifySkillCreate(@Request() request: OmixRequest, @Body() body: field.BaseClassifySkillCreate) {
        return await this.classifyService.httpBaseClassifySkillCreate(request, body)
    }

    @Get('/client/column')
    @ApiDecorator({
        operation: { summary: '客户端产品系列列表' },
        response: { status: 200, description: 'OK' }
    })
    public async httpClientColumnClassify(@Request() request: OmixRequest) {
        return await this.classifyService.httpClientColumnClassify(request)
    }
}
