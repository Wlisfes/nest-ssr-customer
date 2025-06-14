import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { compareSync } from 'bcryptjs'
import { Logger, AutoDescriptor } from '@server/modules/logger/logger.service'
import { DatabaseService } from '@server/modules/database/database.service'
import { OmixRequest } from '@server/interface/instance.resolver'
import { fetchIntNumber } from '@server/utils/utils-common'
import * as schema from '@server/modules/database/database.schema'
import * as field from '@server/interface/instance.resolver'

@Injectable()
export class I18nService extends Logger {
    constructor(private readonly database: DatabaseService) {
        super()
    }

    /**新增国际化**/
    @AutoDescriptor
    public async httpBaseSystemI18nCreate(request: OmixRequest, body: field.BaseSystemI18nCreate) {}
}
