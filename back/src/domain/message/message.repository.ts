import { Message } from './message.entity';

export const MESSAGE_REPOSITORY = Symbol('MESSAGE_REPOSITORY');

export interface IMessageRepository {
  readAll(): Promise<Message[] | null>;

  readMessagesByChat(chatId: number): Promise<Message[] | null>;

  createMessage(message: string, chatId: number): Promise<Message | null>;
}
