import { Get, Header, Request } from '@nestjs/common'
import { WithController } from '@server/decorator/with.decorator'
import { DeployService } from '@server/modules/deploy/deploy.service'

@WithController('deploy')
export class DeployController {
    constructor(private readonly deployService: DeployService) {}

    /**商品分类**/
    @Get('chunk/column')
    public async httpBaseDeployChunkColumn() {
        return await this.deployService.httpBaseDeployChunkColumn()
    }
}
