import { Injectable } from '@nestjs/common';
import { Message } from '../../domain/message/message.entity';
import { PrismaService } from '../../../prisma/service/prisma.service';
import { IMessageRepository } from '../../domain/message/message.repository';

@Injectable()
export class MessageRepository implements IMessageRepository {
  constructor(private readonly prisma: PrismaService) {}

  async readAll(): Promise<Message[] | null> {
    const messages = await this.prisma.message.findMany();

    if (!messages) return null;

    return messages.map(m => new Message(m.message, m.isGemini, m.chatId));
  }

  async readMessagesByChat(chatId: number): Promise<Message[] | null> {
    const messages = await this.prisma.message.findMany({
      where: {
        chatId,
      },
    });

    if (!messages) return null;

    return messages.map(m => new Message(m.message, m.isGemini, m.chatId));
  }

  async createMessage(message: string, isGemini: boolean, chatId: number): Promise<Message | null> {
    const created = await this.prisma.message.create({
      data: {
        message,
        isGemini,
        chatId,
      },
    });

    return new Message(created.message, created.isGemini, created.chatId);
  }
}
