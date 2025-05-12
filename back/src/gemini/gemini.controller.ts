import { Body, Controller, Get } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { CreateMessageDto } from '../application/message/dto/create-message.dto';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Get()
  sendMessage(@Body() question: CreateMessageDto) {
    return this.geminiService.sendMessage(question.message);
  }
}
