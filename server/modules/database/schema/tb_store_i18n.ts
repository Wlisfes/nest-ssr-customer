import { Entity, Column } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, Length, IsEnum } from 'class-validator'
import { I18nAdapter } from '@server/modules/database/database.adapter'
import { fetchEnumProperty, fetchEnumComment } from '@server/utils/utils-schema'
import * as enums from '@server/modules/database/database.enums'

@Entity({ name: 'tb_store_i18n', comment: '国际化表' })
export class SchemaI18n extends I18nAdapter {
    @ApiProperty({ description: '字段类型', enum: fetchEnumProperty(enums.WeekI18nType) })
    @IsNotEmpty({ message: '字段类型必填' })
    @IsEnum(enums.WeekI18nType.keys, { message: '字段类型格式错误' })
    @Column({ name: 'type', nullable: false, comment: fetchEnumComment('字段类型', enums.WeekI18nType) })
    type: string

    @ApiProperty({ description: '字段名称', example: '妖雨纯' })
    @IsNotEmpty({ message: '字段名称必填' })
    @Length(2, 128, { message: '字段名称必须保持2~128位' })
    @Column({ name: 'key', comment: '字段名称', length: 128, nullable: false })
    key: string
}
