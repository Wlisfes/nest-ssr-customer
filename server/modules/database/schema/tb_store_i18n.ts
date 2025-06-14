import { Entity, Column } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, Length, IsEnum } from 'class-validator'
import { DatabaseAdapter } from '@server/modules/database/database.adapter'
import * as enums from '@server/modules/database/database.enums'

@Entity({ name: 'tb_store_i18n', comment: '国际化表' })
export class SchemaI18n extends DatabaseAdapter {
    @ApiProperty({ description: '字段名称', example: '妖雨纯' })
    @IsNotEmpty({ message: '字段名称必填' })
    @Length(2, 128, { message: '字段名称必须保持2~128位' })
    @Column({ comment: '字段名称', length: 128, nullable: false })
    key: string

    @ApiProperty({ description: '简体中文', example: '简体中文' })
    @IsNotEmpty({ message: '简体中文必填' })
    @Length(1, 2048, { message: '简体中文最大长度不能超过2048' })
    @Column({ comment: '简体中文', length: 2048, nullable: false })
    cn: string

    @ApiProperty({ description: '英语', example: '英语' })
    @IsNotEmpty({ message: '英语必填' })
    @Length(1, 2048, { message: '英语最大长度不能超过2048' })
    @Column({ comment: '英语', length: 2048, nullable: false })
    en: string

    @ApiProperty({ description: '俄罗斯语描述', example: '俄罗斯语' })
    @IsNotEmpty({ message: '俄罗斯语描述必填' })
    @Length(1, 2048, { message: '俄罗斯语描述最大长度不能超过2048' })
    @Column({ comment: '俄罗斯语描述', length: 2048, nullable: false })
    ru: string

    @ApiProperty({ description: '西班牙语', example: '西班牙语' })
    @IsNotEmpty({ message: '西班牙语必填' })
    @Length(1, 2048, { message: '西班牙语最大长度不能超过2048' })
    @Column({ comment: '西班牙语', length: 2048, nullable: false })
    es: string

    @ApiProperty({ description: '葡萄牙语', example: '葡萄牙语' })
    @IsNotEmpty({ message: '葡萄牙语必填' })
    @Length(1, 2048, { message: '葡萄牙语最大长度不能超过2048' })
    @Column({ comment: '葡萄牙语', length: 2048, nullable: false })
    pt: string
}
