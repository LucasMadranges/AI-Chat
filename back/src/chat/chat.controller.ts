import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReadChatUsecase } from '../application/chat/usecases/read-chat.usecase';
import { CreateChatUsecase } from '../application/chat/usecases/create-chat.usecase';
import { CreateChatDto } from '../application/chat/dto/create-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(
    private readonly readChatUsecase: ReadChatUsecase,
    private readonly createChatUsecase: CreateChatUsecase
  ) {}

  @Get()
  readAll() {
    return this.readChatUsecase.execute();
  }

  @Post(':chatId')
  createChat(@Body() data: CreateChatDto) {
    return this.createChatUsecase.execute(data.label);
  }
}
