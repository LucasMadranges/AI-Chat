// users/users.module.ts
import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { PrismaService } from '../../prisma/service/prisma.service';
import { SendMessageUsecase } from '../application/message/usecases/send-message.usecase';
import { GEMINI_REPOSITORY } from '../domain/message/gemini.repository';
import { MESSAGE_REPOSITORY } from '../domain/message/message.repository';
import { GeminiRepository } from '../infrastructure/message/gemini.repository';
import { MessageRepository } from '../infrastructure/message/prisma-message.repository';
import { ReadMessagesUsecase } from '../application/message/usecases/read-messages.usecase';
import { ReadMessagesByChatUsecase } from '../application/message/usecases/read-messages-by-chat.usecase';
import { CreateMessageUsecase } from '../application/message/usecases/create-message.usecase';

@Module({
  controllers: [MessageController],
  providers: [
    // Usecase
    ReadMessagesUsecase,
    ReadMessagesByChatUsecase,
    CreateMessageUsecase,

    // Gemini
    SendMessageUsecase,

    // Service
    PrismaService,
    {
      provide: MESSAGE_REPOSITORY,
      useClass: MessageRepository,
    },
    {
      provide: GEMINI_REPOSITORY,
      useClass: GeminiRepository,
    },
  ],
  exports: [MESSAGE_REPOSITORY],
})
export class MessageModule {}
