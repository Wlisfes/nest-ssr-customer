import { PickType, IntersectionType, PartialType } from '@nestjs/swagger'
import { OmixColumn, OmixPayload } from '@server/interface/instance.resolver'
import { SchemaI18n } from '@server/modules/database/database.schema'

/**新增国际化**/
export class BaseSystemI18nCreate extends PickType(SchemaI18n, ['type', 'key', 'cn', 'en', 'es', 'ru', 'pt']) {}
