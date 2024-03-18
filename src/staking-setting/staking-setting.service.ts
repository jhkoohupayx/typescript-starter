import { Injectable } from '@nestjs/common';
import { CreateStakingSettingDto } from './dto/create-staking-setting.dto';
import { UpdateStakingSettingDto } from './dto/update-staking-setting.dto';

@Injectable()
export class StakingSettingService {
  create(createStakingSettingDto: CreateStakingSettingDto) {
    return 'This action adds a new stakingSetting';
  }

  findAll() {
    return `This action returns all stakingSetting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stakingSetting`;
  }

  update(id: number, updateStakingSettingDto: UpdateStakingSettingDto) {
    return `This action updates a #${id} stakingSetting`;
  }

  remove(id: number) {
    return `This action removes a #${id} stakingSetting`;
  }
}
