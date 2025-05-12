import { Controller, Body, Get } from '@nestjs/common';
import { SendMessageUsecase } from '../application/message/usecases/send-message.usecase';

@Controller('message')
export class MessageController {
  constructor(private readonly sendMessageUsecase: SendMessageUsecase) {}

  @Get()
  sendMessage(@Body() data: string) {
    return this.sendMessageUsecase.execute(data);
  }
}
