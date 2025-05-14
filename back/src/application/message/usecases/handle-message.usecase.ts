import { GeminiRepository } from '../../../infrastructure/message/gemini.repository';
import { IMessageRepository, MESSAGE_REPOSITORY } from '../../../domain/message/message.repository';
import { Inject, Injectable } from '@nestjs/common';
import { GEMINI_REPOSITORY } from '../../../domain/message/gemini.repository';

@Injectable()
export class HandleMessageUsecase {
  constructor(
    @Inject(MESSAGE_REPOSITORY)
    private readonly messageRepository: IMessageRepository,
    @Inject(GEMINI_REPOSITORY)
    private readonly geminiRepository: GeminiRepository
  ) {}

  async execute(message, chatId) {
    await this.messageRepository.createMessage(message, false, chatId);

    const aiResponse = await this.geminiRepository.sendMessage(message);

    const geminiMessage = aiResponse ? aiResponse['message'] : '';

    return await this.messageRepository.createMessage(geminiMessage, true, chatId);
  }
}
