import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StakingUsersService } from './staking-users.service';
import { CreateStakingUserDto } from './dto/create-staking-user.dto';
import { UpdateStakingUserDto } from './dto/update-staking-user.dto';

@Controller('staking-users')
export class StakingUsersController {
  constructor(private readonly stakingUsersService: StakingUsersService) {}

  @Post()
  create(@Body() createStakingUserDto: CreateStakingUserDto) {
    return this.stakingUsersService.create(createStakingUserDto);
  }

  @Get()
  findAll() {
    return this.stakingUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stakingUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStakingUserDto: UpdateStakingUserDto) {
    return this.stakingUsersService.update(+id, updateStakingUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stakingUsersService.remove(+id);
  }
}
