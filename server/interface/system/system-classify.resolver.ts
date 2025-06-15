import { PickType, IntersectionType, PartialType } from '@nestjs/swagger'
import { OmixColumn, OmixPayload } from '@server/interface/instance.resolver'
import { SchemaClassify, SchemaClassifySkill } from '@server/modules/database/database.schema'

/**新增产品系列**/
export class BaseClassifyCreate extends PickType(SchemaClassify, ['fileId', 'cn', 'en', 'es', 'ru', 'pt']) {}

/**新增产品系列配置**/
export class BaseClassifySkillCreate extends PickType(SchemaClassifySkill, ['pid', 'cn', 'en', 'es', 'ru', 'pt']) {}
