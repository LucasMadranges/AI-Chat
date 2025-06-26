import { Chat } from './chat.entity';

export const CHAT_REPOSITORY = Symbol('CHAT_REPOSITORY');

export interface IChatRepository {
  readAll(): Promise<Chat[] | null>;

  createChat(label: string): Promise<Chat | null>;
}
