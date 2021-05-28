import { Module } from '@nestjs/common';
import { EchoModule } from './echo/echo.module';

@Module({
  imports: [EchoModule],
})
export class AppModule {}
