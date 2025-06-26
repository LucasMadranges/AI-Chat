import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { PrismaService } from '../../prisma/service/prisma.service';
import { ReadChatUsecase } from '../application/chat/usecases/read-chat.usecase';
import { CHAT_REPOSITORY } from '../domain/chat/chat.repository';
import { PrismaChatRepository } from '../infrastructure/chat/prisma-chat.repository';
import { MessageModule } from '../message/message.module';
import { CreateChatUsecase } from '../application/chat/usecases/create-chat.usecase';

@Module({
  imports: [MessageModule],
  controllers: [ChatController],
  providers: [
    // Usecase
    ReadChatUsecase,
    CreateChatUsecase,

    // Service
    PrismaService,
    {
      provide: CHAT_REPOSITORY,
      useClass: PrismaChatRepository,
    },
  ],
})
export class ChatModule {}
