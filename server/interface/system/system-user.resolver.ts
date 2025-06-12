import { PickType, IntersectionType, PartialType } from '@nestjs/swagger'
import { OmixColumn, OmixPayload } from '@server/interface/instance.resolver'
import { SchemaUser } from '@server/modules/database/database.schema'

/**注册账号**/
export class BaseSystemUserRegister extends IntersectionType(
    PickType(SchemaUser, ['email', 'nickname', 'password']),
    PickType(OmixPayload, ['code'])
) {}
