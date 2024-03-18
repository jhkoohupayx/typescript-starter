import { Injectable } from '@nestjs/common';
import { CreateStakeDto } from './dto/create-stake.dto';
import { UpdateStakeDto } from './dto/update-stake.dto';

@Injectable()
export class StakesService {
  create(createStakeDto: CreateStakeDto) {
    return 'This action adds a new stake';
  }

  findAll() {
    return `This action returns all stakes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stake`;
  }

  update(id: number, updateStakeDto: UpdateStakeDto) {
    return `This action updates a #${id} stake`;
  }

  remove(id: number) {
    return `This action removes a #${id} stake`;
  }
}
