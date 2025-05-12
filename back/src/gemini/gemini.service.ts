import { Injectable } from '@nestjs/common';

@Injectable()
export class GeminiService {
  async sendMessage(message: string) {
    return message;
  }
}
