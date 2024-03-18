import { Test, TestingModule } from '@nestjs/testing';
import { StakesController } from './stakes.controller';
import { StakesService } from './stakes.service';

describe('StakesController', () => {
  let controller: StakesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StakesController],
      providers: [StakesService],
    }).compile();

    controller = module.get<StakesController>(StakesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
