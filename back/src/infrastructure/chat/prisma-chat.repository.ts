import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/service/prisma.service';
import { IChatRepository } from '../../domain/chat/chat.repository';
import { Chat } from '../../domain/chat/chat.entity';

@Injectable()
export class PrismaChatRepository implements IChatRepository {
  constructor(private readonly prisma: PrismaService) {}

  async readAll(): Promise<Chat[] | null> {
    const chat = await this.prisma.chat.findMany();

    if (!chat) return null;

    return chat.map(c => new Chat(c.id, c.label));
  }

  async createChat(label: string): Promise<Chat | null> {
    const created = await this.prisma.chat.create({
      data: {
        label: label,
      },
    });

    if (!created) return null;
    else return new Chat(created.id, created.label);
  }
}
