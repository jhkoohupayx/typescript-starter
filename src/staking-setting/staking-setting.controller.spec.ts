import { Test, TestingModule } from '@nestjs/testing';
import { StakingSettingController } from './staking-setting.controller';
import { StakingSettingService } from './staking-setting.service';

describe('StakingSettingController', () => {
  let controller: StakingSettingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StakingSettingController],
      providers: [StakingSettingService],
    }).compile();

    controller = module.get<StakingSettingController>(StakingSettingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
