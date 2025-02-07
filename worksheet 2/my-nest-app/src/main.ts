import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

const PORT = process.env.PORT;



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT || 5000);
}
bootstrap();
