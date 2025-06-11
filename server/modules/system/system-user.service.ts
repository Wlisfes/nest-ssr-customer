import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { compareSync } from 'bcryptjs'
import { Logger, AutoDescriptor } from '@server/modules/logger/logger.service'
import { DatabaseService } from '@server/modules/database/database.service'
import { OmixRequest } from '@server/interface/instance.resolver'
import * as schema from '@server/modules/database/database.schema'

@Injectable()
export class SystemUserService extends Logger {
    constructor(private readonly database: DatabaseService) {
        super()
    }

    /**注册账号**/
    @AutoDescriptor
    public async httpBaseSystemUserRegister(request: OmixRequest) {
        const ctx = await this.database.fetchConnectTransaction()
        try {
            return await this.database.fetchConnectBuilder(this.database.schemaUser, async qb => {
                await this.database.fetchConnectCreate(ctx.manager.getRepository(schema.SchemaUser), {
                    deplayName: this.deplayName,
                    request,
                    body: {}
                })
                return await ctx.commitTransaction().then(async () => {
                    return await this.fetchResolver({ message: '注册成功' })
                })
            })
        } catch (err) {
            await ctx.rollbackTransaction()
            return await this.fetchCatchCompiler(this.deplayName, err)
        } finally {
            await ctx.release()
        }
    }
}
