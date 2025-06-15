import { PrimaryColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, Length } from 'class-validator'
import { fetchIntNumber } from '@server/utils/utils-common'

export abstract class DatabaseAdapter {
    @ApiProperty({ description: '主键ID', example: 1000 })
    @IsNotEmpty({ message: '主键ID必填' })
    @PrimaryColumn({ name: 'key_id', comment: '表主键', update: false, length: 19, nullable: false })
    keyId: string = fetchIntNumber()

    @ApiProperty({ description: '创建时间', example: '2023-10-26 16:03:38' })
    @CreateDateColumn({ name: 'create_time', comment: '创建时间', update: false })
    createTime: Date

    @ApiProperty({ description: '更新时间', example: '2023-10-26 16:03:38' })
    @UpdateDateColumn({ name: 'modify_time', comment: '更新时间' })
    modifyTime: Date
}

export abstract class I18nAdapter extends DatabaseAdapter {
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
}
