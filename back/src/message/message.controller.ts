import { Controller, Body, Post } from '@nestjs/common';
import { SendMessageUsecase } from '../application/message/usecases/send-message.usecase';
import { SendMessageDto } from '../application/message/dto/send-message.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly sendMessageUsecase: SendMessageUsecase) {}

  @Post()
  sendMessage(@Body() data: SendMessageDto) {
    return this.sendMessageUsecase.execute(data.message);
  }
}
