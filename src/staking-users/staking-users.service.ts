import { Injectable } from '@nestjs/common';
import { CreateStakingUserDto } from './dto/create-staking-user.dto';
import { UpdateStakingUserDto } from './dto/update-staking-user.dto';

@Injectable()
export class StakingUsersService {
  create(createStakingUserDto: CreateStakingUserDto) {
    return 'This action adds a new stakingUser';
  }

  findAll() {
    return `This action returns all stakingUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stakingUser`;
  }

  update(id: number, updateStakingUserDto: UpdateStakingUserDto) {
    return `This action updates a #${id} stakingUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} stakingUser`;
  }
}
