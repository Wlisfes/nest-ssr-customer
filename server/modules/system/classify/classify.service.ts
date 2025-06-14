import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { compareSync } from 'bcryptjs'
import { Logger, AutoDescriptor } from '@server/modules/logger/logger.service'
import { DatabaseService } from '@server/modules/database/database.service'
import { OmixRequest } from '@server/interface/instance.resolver'
import { fetchIntNumber } from '@server/utils/utils-common'
import * as schema from '@server/modules/database/database.schema'
import * as enums from '@server/modules/database/database.enums'
import * as field from '@server/interface/instance.resolver'

@Injectable()
export class ClassifyService extends Logger {
    constructor(private readonly database: DatabaseService) {
        super()
    }

    /**新增产品系列**/
    @AutoDescriptor
    public async httpBaseClassifyCreate(request: OmixRequest, body: field.BaseClassifyCreate) {
        const ctx = await this.database.fetchConnectTransaction()
        try {
            await this.database.fetchConnectCreate(ctx.manager.getRepository(schema.SchemaClassify), {
                deplayName: this.deplayName,
                request,
                body: Object.assign(body, { status: enums.WeekClassifyStatus.Enable })
            })
            return await ctx.commitTransaction().then(async () => {
                return await this.fetchResolver({ message: '新增成功' })
            })
        } catch (err) {
            await ctx.rollbackTransaction()
            return await this.fetchCatchCompiler(this.deplayName, err)
        } finally {
            await ctx.release()
        }
    }
}
