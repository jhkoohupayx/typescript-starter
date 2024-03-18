import { PartialType } from '@nestjs/mapped-types';
import { CreateStakingUserDto } from './create-staking-user.dto';

export class UpdateStakingUserDto extends PartialType(CreateStakingUserDto) {}
