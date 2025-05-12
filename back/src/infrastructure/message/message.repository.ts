import { Injectable } from '@nestjs/common';
import { IMessageRepository } from '../../domain/message/message.repository';
import { Message } from '../../domain/message/message.entity';
import axios from 'axios';

@Injectable()
export class MessageRepository implements IMessageRepository {
  constructor() {}

  async sendMessage(message: string): Promise<Message | null> {
    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API}`,
      {
        contents: [
          {
            parts: [{ text: message }],
          },
        ],
        generationConfig: {
          temperature: 0.5,
          maxOutputTokens: 100,
        },
      }
    );

    return res.data.candidates[0].content.parts[0].text;
  }
}
