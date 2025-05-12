import { Message } from './message.entity';

export const MESSAGE_REPOSITORY = Symbol('MESSAGE_REPOSITORY');

export interface IMessageRepository {
  sendMessage(message: string): Promise<Message | null>;
}
