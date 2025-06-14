import { Entity, Column } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, Length, IsEnum } from 'class-validator'
import { fetchEnumProperty, fetchEnumComment } from '@server/utils/utils-schema'
import { DatabaseAdapter } from '@server/modules/database/database.adapter'
import * as enums from '@server/modules/database/database.enums'

@Entity({ name: 'tb_store_classify', comment: '产品系列表' })
export class SchemaClassify extends DatabaseAdapter {
    @ApiProperty({ description: '图片ID' })
    @IsNotEmpty({ message: '图片ID必填' })
    @Column({ name: 'file_id', comment: '图片ID', length: 19, nullable: false })
    fileId: string

    @ApiProperty({ description: '简体中文', example: '简体中文' })
    @IsNotEmpty({ message: '简体中文必填' })
    @Length(1, 255, { message: '简体中文最大长度不能超过255' })
    @Column({ name: 'cn', comment: '简体中文', length: 255, nullable: false })
    cn: string

    @ApiProperty({ description: '英语', example: '英语' })
    @IsNotEmpty({ message: '英语必填' })
    @Length(1, 255, { message: '英语最大长度不能超过255' })
    @Column({ name: 'en', comment: '英语', length: 255, nullable: false })
    en: string

    @ApiProperty({ description: '俄罗斯语描述', example: '俄罗斯语' })
    @IsNotEmpty({ message: '俄罗斯语描述必填' })
    @Length(1, 255, { message: '俄罗斯语描述最大长度不能超过255' })
    @Column({ name: 'ru', comment: '俄罗斯语描述', length: 255, nullable: false })
    ru: string

    @ApiProperty({ description: '西班牙语', example: '西班牙语' })
    @IsNotEmpty({ message: '西班牙语必填' })
    @Length(1, 255, { message: '西班牙语最大长度不能超过255' })
    @Column({ name: 'es', comment: '西班牙语', length: 255, nullable: false })
    es: string

    @ApiProperty({ description: '葡萄牙语', example: '葡萄牙语' })
    @IsNotEmpty({ message: '葡萄牙语必填' })
    @Length(1, 255, { message: '葡萄牙语最大长度不能超过255' })
    @Column({ name: 'pt', comment: '葡萄牙语', length: 255, nullable: false })
    pt: string

    @ApiProperty({ description: '状态', enum: fetchEnumProperty(enums.WeekClassifyStatus) })
    @IsNotEmpty({ message: '状态必填' })
    @IsEnum(enums.WeekClassifyStatus.keys, { message: '状态格式错误' })
    @Column({ name: 'status', nullable: false, comment: fetchEnumComment('状态', enums.WeekClassifyStatus) })
    status: string
}
