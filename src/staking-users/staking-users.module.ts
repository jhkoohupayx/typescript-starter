import { Module } from '@nestjs/common';
import { StakingUsersService } from './staking-users.service';
import { StakingUsersController } from './staking-users.controller';

@Module({
  controllers: [StakingUsersController],
  providers: [StakingUsersService],
})
export class StakingUsersModule {}
