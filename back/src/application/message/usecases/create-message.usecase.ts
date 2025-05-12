import { Injectable, Inject } from '@nestjs/common';
import { Message } from '../../../domain/message/message.entity';
import { IMessageRepository, MESSAGE_REPOSITORY } from '../../../domain/message/message.repository';

@Injectable()
export class CreateMessageUsecase {
  constructor(
    @Inject(MESSAGE_REPOSITORY)
    private readonly messageRepository: IMessageRepository
  ) {}

  async execute(message: string, chatId: number): Promise<Message | null> {
    return await this.messageRepository.createMessage(message, chatId);
  }
}
