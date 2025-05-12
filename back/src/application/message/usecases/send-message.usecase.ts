import { Injectable, Inject } from '@nestjs/common';
import { IGeminiRepository, GEMINI_REPOSITORY } from '../../../domain/message/gemini.repository';
import { Gemini } from '../../../domain/message/gemini.entity';

@Injectable()
export class SendMessageUsecase {
  constructor(
    @Inject(GEMINI_REPOSITORY)
    private readonly geminiRepository: IGeminiRepository
  ) {}

  async execute(message: string): Promise<Gemini | null> {
    return await this.geminiRepository.sendMessage(message);
  }
}
