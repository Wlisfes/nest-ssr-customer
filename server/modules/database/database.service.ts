import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { Repository, DataSource, SelectQueryBuilder } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Logger, AutoDescriptor } from '@server/modules/logger/logger.service'
import * as schema from '@server/modules/database/database.schema'

@Injectable()
export class DatabaseService extends Logger {
    constructor(
        private readonly dataSource: DataSource,
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
}
