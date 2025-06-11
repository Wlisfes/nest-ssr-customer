import { PrimaryColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
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
