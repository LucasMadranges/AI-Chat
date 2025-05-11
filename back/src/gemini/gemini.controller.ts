import { Body, Controller, Get } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { CreateUsersDto } from '../../libs/dto/users/create-users.dto';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Get()
  sendMessage(@Body() question: string) {
    return this.geminiService.sendMessage(question);
  }
}
