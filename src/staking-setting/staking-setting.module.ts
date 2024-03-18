import { Module } from '@nestjs/common';
import { StakingSettingService } from './staking-setting.service';
import { StakingSettingController } from './staking-setting.controller';

@Module({
  controllers: [StakingSettingController],
  providers: [StakingSettingService],
})
export class StakingSettingModule {}
