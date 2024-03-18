import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false // 비활성화
    logger: process.env.NODE_ENV === 'production' ? ['error', 'warn'] : ['error', 'warn', 'log', 'verbose', 'debug'],
  });
  app.enableCors();

  // 유효성 검사 적용 파이프
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 정의되지 않은 속성 자동 제거
      transform: true, // 타입이 맞지 않을 때 자동 타입 변환
      forbidNonWhitelisted: true, // 엔티티 데코에 없는 값에 대한 에러메시지를 준다
      // transformOptions: { // 암시적 형변환?? 문자열 '10'을 number???
      //   enableImplicitConversion: true,
      // },
    })
  );
  console.log(process.env.NODE_ENV);
  console.log(process.env.PORT);
  console.log(`start`);
  await app.listen(process.env.PORT);
}
bootstrap();
