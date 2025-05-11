import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/service/prisma.module';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { GeminiService } from './gemini/gemini.service';
import { GeminiController } from './gemini/gemini.controller';
import { GeminiModule } from './gemini/gemini.module';

@Module({
  imports: [PrismaModule, UsersModule, GeminiModule],
  controllers: [AppController, UsersController, GeminiController],
  providers: [AppService, UsersService, GeminiService],
})
export class AppModule {}
