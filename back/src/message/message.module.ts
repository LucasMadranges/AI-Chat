// users/users.module.ts
import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { PrismaService } from '../../prisma/service/prisma.service';
import { SendMessageUsecase } from '../application/message/usecases/send-message.usecase';
import { MESSAGE_REPOSITORY } from '../domain/message/message.repository';
import { MessageRepository } from '../infrastructure/message/message.repository';

@Module({
  controllers: [MessageController],
  providers: [
    // Usecase
    SendMessageUsecase,

    // Service
    PrismaService,
    {
      provide: MESSAGE_REPOSITORY,
      useClass: MessageRepository,
    },
  ],
})
export class MessageModule {}
