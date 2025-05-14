import { Injectable } from '@nestjs/common';
import { IGeminiRepository } from '../../domain/message/gemini.repository';
import axios from 'axios';
import { Gemini } from '../../domain/message/gemini.entity';

@Injectable()
export class GeminiRepository implements IGeminiRepository {
  constructor() {}

  async sendMessage(message: string): Promise<Gemini | null> {
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

    const text = res.data.candidates[0].content.parts[0].text;
    return new Gemini(text);
  }
}
