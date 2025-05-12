import { Injectable, Inject } from '@nestjs/common';
import { CHAT_REPOSITORY, IChatRepository } from '../../../domain/chat/chat.repository';
import { Chat } from '../../../domain/chat/chat.entity';

@Injectable()
export class ReadChatUsecase {
  constructor(
    @Inject(CHAT_REPOSITORY)
    private readonly chatRepository: IChatRepository
  ) {}

  async execute(): Promise<Chat[] | null> {
    return await this.chatRepository.readAll();
  }
}
