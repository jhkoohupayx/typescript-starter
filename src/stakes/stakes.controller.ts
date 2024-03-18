import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StakesService } from './stakes.service';
import { CreateStakeDto } from './dto/create-stake.dto';
import { UpdateStakeDto } from './dto/update-stake.dto';

@Controller('stakes')
export class StakesController {
  constructor(private readonly stakesService: StakesService) {}

  @Post()
  create(@Body() createStakeDto: CreateStakeDto) {
    return this.stakesService.create(createStakeDto);
  }

  @Get()
  findAll() {
    return this.stakesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stakesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStakeDto: UpdateStakeDto) {
    return this.stakesService.update(+id, updateStakeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stakesService.remove(+id);
  }
}
