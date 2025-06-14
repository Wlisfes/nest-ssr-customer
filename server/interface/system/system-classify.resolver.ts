import { PickType, IntersectionType, PartialType } from '@nestjs/swagger'
import { OmixColumn, OmixPayload } from '@server/interface/instance.resolver'
import { SchemaClassify } from '@server/modules/database/database.schema'

/**新增产品系列**/
export class BaseClassifyCreate extends PickType(SchemaClassify, ['fileId', 'cn', 'en', 'es', 'ru', 'pt']) {}
