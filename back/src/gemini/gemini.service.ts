import { Injectable } from '@nestjs/common';

@Injectable()
export class GeminiService {
  async sendMessage(question: string) {
    return 'Hello World!';
  }
}
