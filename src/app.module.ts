import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// config
import { ConfigService } from '@nestjs/config/dist/config.service';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { StakesModule } from './stakes/stakes.module';
import { StakingUsersModule } from './staking-users/staking-users.module';
import { StakingSettingModule } from './staking-setting/staking-setting.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'product'
          ? '.env.prod'
          : process.env.NODE_ENV === 'stage'
            ? '.env.stage'
            : process.env.NODE_ENV === 'dev'
              ? '.env.dev'
              : '.env.local',
    }),
    StakesModule,
    StakingUsersModule,
    StakingSettingModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
