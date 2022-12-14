import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { HttpModule } from './infra/http.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
