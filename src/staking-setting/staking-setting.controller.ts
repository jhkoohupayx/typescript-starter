import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StakingSettingService } from './staking-setting.service';
import { CreateStakingSettingDto } from './dto/create-staking-setting.dto';
import { UpdateStakingSettingDto } from './dto/update-staking-setting.dto';

@Controller('staking-setting')
export class StakingSettingController {
  constructor(private readonly stakingSettingService: StakingSettingService) {}

  @Post()
  create(@Body() createStakingSettingDto: CreateStakingSettingDto) {
    return this.stakingSettingService.create(createStakingSettingDto);
  }

  @Get()
  findAll() {
    return this.stakingSettingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stakingSettingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStakingSettingDto: UpdateStakingSettingDto) {
    return this.stakingSettingService.update(+id, updateStakingSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stakingSettingService.remove(+id);
  }
}
