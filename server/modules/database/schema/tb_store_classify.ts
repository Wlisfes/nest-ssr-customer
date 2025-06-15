import { Entity, Column } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, Length, IsEnum } from 'class-validator'
import { fetchEnumProperty, fetchEnumComment } from '@server/utils/utils-schema'
import { I18nAdapter } from '@server/modules/database/database.adapter'
import * as enums from '@server/modules/database/database.enums'

@Entity({ name: 'tb_store_classify', comment: '产品系列表' })
export class SchemaClassify extends I18nAdapter {
    @ApiProperty({ description: '图片ID' })
    @IsNotEmpty({ message: '图片ID必填' })
    @Column({ name: 'file_id', comment: '图片ID', length: 19, nullable: false })
    fileId: string

    @ApiProperty({ description: '状态', enum: fetchEnumProperty(enums.WeekClassifyStatus) })
    @IsNotEmpty({ message: '状态必填' })
    @IsEnum(enums.WeekClassifyStatus.keys, { message: '状态格式错误' })
    @Column({ name: 'status', nullable: false, comment: fetchEnumComment('状态', enums.WeekClassifyStatus) })
    status: string
}

@Entity({ name: 'tb_store_classify_skill', comment: '产品系列表配置' })
export class SchemaClassifySkill extends I18nAdapter {
    @ApiProperty({ description: '系列ID' })
    @IsNotEmpty({ message: '系列ID必填' })
    @Length(19, 19, { message: '系列ID必须是19位' })
    @Column({ comment: '系列ID', length: 19, nullable: true })
    pid: string

    @ApiProperty({ description: '状态', enum: fetchEnumProperty(enums.WeekClassifyStatus) })
    @IsNotEmpty({ message: '状态必填' })
    @IsEnum(enums.WeekClassifyStatus.keys, { message: '状态格式错误' })
    @Column({ name: 'status', nullable: false, comment: fetchEnumComment('状态', enums.WeekClassifyStatus) })
    status: string
}
