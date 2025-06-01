import { Get, Header, Request } from '@nestjs/common'
import { WithController } from '@server/decorator/with.decorator'

@WithController('deploy')
export class DeployController {
    /**商品分类**/
    @Get('chunk/column')
    public async httpBaseDeployChunkColumn() {
        return {
            name: 'dasdas'
        }
    }
}
