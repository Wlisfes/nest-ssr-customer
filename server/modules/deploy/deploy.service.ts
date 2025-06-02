import { Injectable } from '@nestjs/common'
import { Logger, AutoDescriptor } from '@server/modules/logger/logger.service'

@Injectable()
export class DeployService extends Logger {
    /**商品分类**/
    @AutoDescriptor
    public async httpBaseDeployChunkColumn() {
        return await this.fetchResolver({
            list: [{ id: 1000, image: `https://oss.lisfes.cn/store/web/1748843796421.svg` }]
        })
    }
}
