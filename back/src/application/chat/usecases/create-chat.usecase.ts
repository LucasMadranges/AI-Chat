import { Injectable, Inject } from '@nestjs/common';
import { CHAT_REPOSITORY, IChatRepository } from 'src/domain/chat/chat.repository';
import { Chat } from '../../../domain/chat/chat.entity';

@Injectable()
export class CreateChatUsecase {
  constructor(
    @Inject(CHAT_REPOSITORY)
    private readonly chatRepository: IChatRepository
  ) {}

  async execute(label: string): Promise<Chat | null> {
    return await this.chatRepository.createChat(label);
  }
}
