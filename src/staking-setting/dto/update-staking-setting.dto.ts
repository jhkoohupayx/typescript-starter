import { PartialType } from '@nestjs/mapped-types';
import { CreateStakingSettingDto } from './create-staking-setting.dto';

export class UpdateStakingSettingDto extends PartialType(CreateStakingSettingDto) {}
