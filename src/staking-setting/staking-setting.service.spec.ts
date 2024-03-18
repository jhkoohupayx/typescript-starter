import { Test, TestingModule } from '@nestjs/testing';
import { StakingSettingService } from './staking-setting.service';

describe('StakingSettingService', () => {
  let service: StakingSettingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StakingSettingService],
    }).compile();

    service = module.get<StakingSettingService>(StakingSettingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
