import { Gemini } from './gemini.entity';

export const GEMINI_REPOSITORY = Symbol('GEMINI_REPOSITORY');

export interface IGeminiRepository {
  sendMessage(message: string): Promise<Gemini | null>;
}
