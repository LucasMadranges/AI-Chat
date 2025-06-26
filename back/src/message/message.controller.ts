import { Controller, Body, Post, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SendMessageUsecase } from '../application/message/usecases/send-message.usecase';
import { SendMessageDto } from '../application/message/dto/send-message.dto';
import { ReadMessagesUsecase } from '../application/message/usecases/read-messages.usecase';
import { ReadMessagesByChatUsecase } from '../application/message/usecases/read-messages-by-chat.usecase';
import { CreateMessageUsecase } from '../application/message/usecases/create-message.usecase';
import { CreateMessageDto } from '../application/message/dto/create-message.dto';
import { HandleMessageUsecase } from '../application/message/usecases/handle-message.usecase';
import { GeminiMessageDto } from '../application/message/dto/gemini-message.dto';

@Controller('message')
export class MessageController {
  constructor(
    private readonly readMessagesUsecase: ReadMessagesUsecase,
    private readonly readMessagesByChatUsecase: ReadMessagesByChatUsecase,
    private readonly createMessageUsecase: CreateMessageUsecase,
    private readonly sendMessageUsecase: SendMessageUsecase,
    private readonly handleMessageUsecase: HandleMessageUsecase
  ) {}

  @Get()
  readAll() {
    return this.readMessagesUsecase.execute();
  }

  @Get(':chatId')
  readMessageByChat(@Param('chatId', ParseIntPipe) chatId: number) {
    return this.readMessagesByChatUsecase.execute(chatId);
  }

  @Post('gemini')
  gemini(@Body() data: GeminiMessageDto) {
    return this.handleMessageUsecase.execute(data.message, data.chatId);
  }

  @Post('addMessage')
  createMessage(@Body() data: CreateMessageDto) {
    return this.createMessageUsecase.execute(data.message, data.isGemini, data.chatId);
  }

  @Post()
  sendMessage(@Body() data: SendMessageDto) {
    return this.sendMessageUsecase.execute(data.message);
  }
}
