import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { compareSync } from 'bcryptjs'
import { Logger, AutoDescriptor } from '@server/modules/logger/logger.service'
import { DatabaseService } from '@server/modules/database/database.service'
import { OmixRequest } from '@server/interface/instance.resolver'
import { fetchIntNumber } from '@server/utils/utils-common'
import * as schema from '@server/modules/database/database.schema'
import * as field from '@server/interface/instance.resolver'

@Injectable()
export class SteamService extends Logger {
    constructor(private readonly database: DatabaseService) {
        super()
    }

    /**流式文件上传**/
    @AutoDescriptor
    public async httpBaseSystemStreamUploader(request: OmixRequest, body: Omix) {
        const ctx = await this.database.fetchConnectTransaction()
        try {
            // const list = [
            //     {
            //         fileSize: 9699,
            //         fileName: '1748843796423.svg',
            //         folder: '/store/web/1748843796423.svg',
            //         url: 'https://oss.lisfes.cn/store/web/1748843796423.svg',
            //         width: 94,
            //         height: 34
            //     },
            //     {
            //         fileSize: 4272,
            //         fileName: '1748843796424.svg',
            //         folder: '/store/web/1748843796424.svg',
            //         url: 'https://oss.lisfes.cn/store/web/1748843796424.svg',
            //         width: 51,
            //         height: 38
            //     },
            //     {
            //         fileSize: 7019,
            //         fileName: '1748843796425.svg',
            //         folder: '/store/web/1748843796425.svg',
            //         url: 'https://oss.lisfes.cn/store/web/1748843796425.svg',
            //         width: 109,
            //         height: 38
            //     },
            //     {
            //         fileSize: 6746,
            //         fileName: '1748843796426.svg',
            //         folder: '/store/web/1748843796426.svg',
            //         url: 'https://oss.lisfes.cn/store/web/1748843796426.svg',
            //         width: 79,
            //         height: 38
            //     },
            //     {
            //         fileSize: 9423,
            //         fileName: '1748843796427.svg',
            //         folder: '/store/web/1748843796427.svg',
            //         url: 'https://oss.lisfes.cn/store/web/1748843796427.svg',
            //         width: 94,
            //         height: 38
            //     },
            //     {
            //         fileSize: 9699,
            //         fileName: '1748843796428.svg',
            //         folder: '/store/web/1748843796428.svg',
            //         url: 'https://oss.lisfes.cn/store/web/1748843796428.svg',
            //         width: 131,
            //         height: 40
            //     },
            //     {
            //         fileSize: 12997,
            //         fileName: '1748843796429.svg',
            //         folder: '/store/web/1748843796429.svg',
            //         url: 'https://oss.lisfes.cn/store/web/1748843796429.svg',
            //         width: 87,
            //         height: 38
            //     }
            // ]
            // for (const item of list) {
            //     await this.database.fetchConnectCreate(ctx.manager.getRepository(schema.SchemaImages), {
            //         deplayName: this.deplayName,
            //         request,
            //         body: item
            //     })
            // }
            // await this.database.fetchConnectCreate(ctx.manager.getRepository(schema.SchemaImages), {
            //     deplayName: this.deplayName,
            //     request,
            //     body: {
            //         fileSize: 7019,
            //         fileName: '1748843796422.svg',
            //         folder: '/store/web/1748843796422.svg',
            //         url: 'https://oss.lisfes.cn/store/web/1748843796422.svg',
            //         width: 135,
            //         height: 35
            //     }
            // })
            // return await ctx.commitTransaction().then(async () => {
            //     return await this.fetchResolver({ message: '上传成功', id: fetchIntNumber() })
            // })
        } catch (err) {
            await ctx.rollbackTransaction()
            return await this.fetchCatchCompiler(this.deplayName, err)
        } finally {
            await ctx.release()
        }
    }
}
