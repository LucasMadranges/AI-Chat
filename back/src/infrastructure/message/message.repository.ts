import { Injectable } from '@nestjs/common';
import { IMessageRepository } from '../../domain/message/message.repository';
import { Message } from '../../domain/message/message.entity';

@Injectable()
export class MessageRepository implements IMessageRepository {
  constructor() {}

  async sendMessage(message: string): Promise<Message | null> {
    return Message.sendMessage(message);
  }
}
