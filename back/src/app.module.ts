import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/service/prisma.module';
import { UsersModule } from './users/users.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [PrismaModule, UsersModule, MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
