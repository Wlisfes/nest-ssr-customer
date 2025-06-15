import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { Repository, DataSource, SelectQueryBuilder } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { isNotEmpty, isEmpty } from 'class-validator'
import { Logger, AutoDescriptor } from '@server/modules/logger/logger.service'
import { fetchSelection } from '@server/utils/utils-schema'
import { fetchCatchWherer } from '@server/utils/utils-plugin'
import { OmixRequest } from '@server/interface/instance.resolver'
import * as schema from '@server/modules/database/database.schema'

/**基础配置**/
export interface BaseOptions extends Omix {
    /**是否停止执行**/
    next?: boolean
    /**描述**/
    comment?: string
    /**请求实例**/
    request: OmixRequest
    /**开启日志**/
    logger?: boolean
    /**输出日志方法名**/
    deplayName?: string
}

/**通用查询配置**/
export interface BaseCommonOption<T> extends BaseOptions {
    /**异常提示文案**/
    message: string
    /**findOne查询入参**/
    dispatch?: Omix<Parameters<Repository<T>['findOne']>['0']>
    /**异常状态码**/
    code?: number
    /**额外异常数据**/
    cause?: Omix
    /**自定义转换验证**/
    transform?: (data: T) => boolean | Promise<boolean>
}

/**创建数据模型**/
export interface BaseCreateOptions<T> extends BaseOptions {
    /**创建数据**/
    body: Parameters<Repository<T>['save']>['0']
}

@Injectable()
export class DatabaseService extends Logger {
    constructor(
        private readonly dataSource: DataSource,
        @InjectRepository(schema.SchemaI18n) public readonly schemaI18n: Repository<schema.SchemaI18n>,
        @InjectRepository(schema.SchemaImages) public readonly schemaImages: Repository<schema.SchemaImages>,
        @InjectRepository(schema.SchemaClassify) public readonly schemaClassify: Repository<schema.SchemaClassify>,
        @InjectRepository(schema.SchemaClassifySkill) public readonly schemaClassifySkill: Repository<schema.SchemaClassifySkill>,
        @InjectRepository(schema.SchemaUser) public readonly schemaUser: Repository<schema.SchemaUser>
    ) {
        super()
    }

    /**条件SQL组合**/
    public async fetchBrackets(where: boolean, handler?: Function) {
        if (where && handler) {
            return await handler(where)
        }
        return where
    }

    /**字段查询输出组合**/
    public async fetchSelection<T>(qb: SelectQueryBuilder<T>, keys: Array<[string, Array<string>]>) {
        const fields = new Set(keys.map(([alias, names]) => fetchSelection(alias, names)).flat(Infinity)) as never as Array<string>
        return await qb.select([...fields])
    }

    /**typeorm事务**/
    public async fetchConnectTransaction(start: boolean = true) {
        const queryRunner = this.dataSource.createQueryRunner()
        await queryRunner.connect()
        if (start) {
            await queryRunner.startTransaction()
        }
        return queryRunner
    }

    /**自定义查询**/
    public async fetchConnectBuilder<T, R>(model: Repository<T>, callback: (qb: SelectQueryBuilder<T>) => Promise<R>) {
        const qb = model.createQueryBuilder('t')
        return await callback(qb)
    }

    /**查询数据是否存在：存在会抛出异常**/
    @AutoDescriptor
    public async fetchConnectNull<T>(model: Repository<T>, data: BaseCommonOption<T>) {
        if ([false, 'false'].includes(data.next ?? true)) {
            /**next等于false停止执行**/
            return data
        }
        const logger = await this.fetchServiceTransaction(data.request, { deplayName: this.fetchDeplayName(data.deplayName) })
        return await model.findOne(data.dispatch).then(async node => {
            if (data.logger ?? true) {
                logger.info({ comment: data.comment, message: `[${model.metadata.name}]:查询出参`, where: data.dispatch.where, node })
            }
            if (data.transform) {
                return await fetchCatchWherer(await data.transform(node), data).then(async () => {
                    return await this.fetchResolver(node)
                })
            } else {
                return await fetchCatchWherer(isNotEmpty(node), data).then(async () => {
                    return await this.fetchResolver(node)
                })
            }
        })
    }

    /**查询数据是否不存在：不存在会抛出异常**/
    @AutoDescriptor
    public async fetchConnectNotNull<T>(model: Repository<T>, data: BaseCommonOption<T>) {
        if ([false, 'false'].includes(data.next ?? true)) {
            /**next等于false停止执行**/
            return data
        }
        const logger = await this.fetchServiceTransaction(data.request, { deplayName: this.fetchDeplayName(data.deplayName) })
        return await model.findOne(data.dispatch).then(async node => {
            if (data.logger ?? true) {
                logger.info({ comment: data.comment, message: `[${model.metadata.name}]:查询出参`, where: data.dispatch.where, node })
            }
            if (data.transform) {
                return await fetchCatchWherer(await data.transform(node), data).then(async () => {
                    return await this.fetchResolver(node)
                })
            } else {
                return await fetchCatchWherer(isEmpty(node), data).then(async () => {
                    return await this.fetchResolver(node)
                })
            }
        })
    }

    /**创建数据模型**/
    @AutoDescriptor
    public async fetchConnectCreate<T>(model: Repository<T>, data: BaseCreateOptions<T>): Promise<Awaited<T> & T> {
        if ([false, 'false'].includes(data.next ?? true)) {
            /**next等于false停止执行**/
            return data as never as Promise<Awaited<T> & T>
        }
        const logger = await this.fetchServiceTransaction(data.request, { deplayName: this.fetchDeplayName(data.deplayName) })
        const state = await model.create(data.body)
        return await model.save(state).then(async node => {
            if (data.logger ?? true) {
                logger.info({ comment: data.comment, message: `[${model.metadata.name}]:事务等待创建结果`, body: data.body, node })
            }
            return node
        })
    }
}
