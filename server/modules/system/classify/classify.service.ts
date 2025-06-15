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

    /**新增产品系列配置**/
    @AutoDescriptor
    public async httpBaseClassifySkillCreate(request: OmixRequest, body: field.BaseClassifySkillCreate) {
        const ctx = await this.database.fetchConnectTransaction()
        try {
            await this.database.fetchConnectNotNull(this.database.schemaClassify, {
                request,
                comment: `系列ID是否错误[${body.pid}]`,
                deplayName: this.deplayName,
                message: `pid:${body.pid} 不存在`,
                dispatch: { where: { keyId: body.pid } }
            })
            await this.database.fetchConnectCreate(ctx.manager.getRepository(schema.SchemaClassifySkill), {
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

    /**客户端产品系列列表**/
    @AutoDescriptor
    public async httpClientColumnClassify(request: OmixRequest) {
        try {
            return await this.database.fetchConnectBuilder(this.database.schemaClassify, async qb => {
                await qb.leftJoinAndMapOne('t.image', schema.SchemaImages, 'image', 'image.keyId = t.fileId')
                await qb.leftJoinAndMapMany('t.skill', schema.SchemaClassifySkill, 'skill', 'skill.pid = t.keyId')
                await this.database.fetchSelection(qb, [
                    ['t', ['keyId', 'cn', 'en', 'ru', 'es', 'pt', 'status']],
                    ['image', ['keyId', 'folder', 'url', 'width', 'height']],
                    ['skill', ['keyId', 'pid', 'cn', 'en', 'ru', 'es', 'pt', 'status']]
                ])
                return await qb.getManyAndCount().then(async ([list = [], total = 0]) => {
                    return await this.fetchResolver({ total, list })
                })
            })
        } catch (err) {
            return await this.fetchCatchCompiler(this.deplayName, err)
        }
    }
}
