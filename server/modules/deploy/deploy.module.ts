import { Module } from '@nestjs/common'
import { DeployController } from '@server/modules/deploy/deploy.controller'
import { DeployService } from '@server/modules/deploy/deploy.service'

@Module({
    imports: [],
    providers: [DeployService],
    controllers: [DeployController]
})
export class DeployModule {}
