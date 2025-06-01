import { Injectable } from '@nestjs/common'
import { Logger } from '@server/modules/logger/logger.service'

@Injectable()
export class DeployService extends Logger {
    /**商品分类**/
    // @AutoDescriptor
    public async httpBaseDeployColumnChunk() {
        return []
    }
}
