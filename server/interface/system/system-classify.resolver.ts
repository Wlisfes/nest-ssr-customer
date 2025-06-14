import { PickType, IntersectionType, PartialType } from '@nestjs/swagger'
import { OmixColumn, OmixPayload } from '@server/interface/instance.resolver'
import { SchemaUser } from '@server/modules/database/database.schema'

/**新增产品系列**/
export class BaseClassifyCreate extends IntersectionType(
    PickType(SchemaUser, ['email', 'nickname', 'password']),
    PickType(OmixPayload, ['code'])
) {}
