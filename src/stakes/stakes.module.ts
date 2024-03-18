import { Module } from '@nestjs/common';
import { StakesService } from './stakes.service';
import { StakesController } from './stakes.controller';
import { StakingUsersModule } from '@/staking-users/staking-users.module';
import { StakingSettingModule } from '@/staking-setting/staking-setting.module';

@Module({
  imports: [StakingUsersModule, StakingSettingModule],
  controllers: [StakesController],
  providers: [StakesService],
})
export class StakesModule {}
