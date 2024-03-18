import { Test, TestingModule } from '@nestjs/testing';
import { StakingUsersService } from './staking-users.service';

describe('StakingUsersService', () => {
  let service: StakingUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StakingUsersService],
    }).compile();

    service = module.get<StakingUsersService>(StakingUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
