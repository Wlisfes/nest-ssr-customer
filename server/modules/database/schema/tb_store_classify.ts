import { Entity, Column } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, Length, IsEmail } from 'class-validator'
import { DatabaseAdapter } from '@server/modules/database/database.adapter'

@Entity({ name: 'tb_store_classify', comment: '商品分类表' })
export class SchemaClassify extends DatabaseAdapter {}
