import { Test, TestingModule } from '@nestjs/testing';
import { StakingUsersController } from './staking-users.controller';
import { StakingUsersService } from './staking-users.service';

describe('StakingUsersController', () => {
  let controller: StakingUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StakingUsersController],
      providers: [StakingUsersService],
    }).compile();

    controller = module.get<StakingUsersController>(StakingUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
