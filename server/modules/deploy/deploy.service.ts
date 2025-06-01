import { Injectable } from '@nestjs/common'
import { Logger, AutoDescriptor } from '@server/modules/logger/logger.service'

@Injectable()
export class DeployService extends Logger {
    /**商品分类**/
    @AutoDescriptor
    public async httpBaseDeployChunkColumn() {
        return await this.fetchResolver({
            list: []
        })
    }
}
