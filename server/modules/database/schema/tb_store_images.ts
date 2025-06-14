import { Entity, Column } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { DatabaseAdapter } from '@server/modules/database/database.adapter'

@Entity({ name: 'tb_store_images', comment: '静态图片表' })
export class SchemaImages extends DatabaseAdapter {
    @ApiProperty({ description: '图片名称' })
    @IsNotEmpty({ message: '图片名称必填' })
    @Column({ name: 'file_name', comment: '图片名称', length: 255, nullable: true })
    fileName: string

    @ApiProperty({ description: '图片size' })
    @IsNotEmpty({ message: '图片size必填' })
    @Column({ name: 'file_size', comment: '图片size', nullable: true })
    fileSize: number

    @ApiProperty({ description: '图片路径' })
    @IsNotEmpty({ message: '图片路径必填' })
    @Column({ name: 'folder', comment: '图片路径', length: 255, nullable: true })
    folder: string

    @ApiProperty({ description: '图片地址' })
    @IsNotEmpty({ message: '图片地址必填' })
    @Column({ name: 'url', comment: '图片地址', length: 1024, nullable: true })
    url: string

    @ApiProperty({ description: '图片宽度' })
    @IsNotEmpty({ message: '图片宽度必填' })
    @Column({ name: 'width', comment: '图片宽度', nullable: true })
    width: number

    @ApiProperty({ description: '图片高度' })
    @IsNotEmpty({ message: '图片高度必填' })
    @Column({ name: 'height', comment: '图片高度', nullable: true })
    height: number
}
