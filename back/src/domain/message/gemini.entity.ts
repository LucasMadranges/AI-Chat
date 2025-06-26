export class Gemini {
  constructor(private readonly message: string) {}

  static sendMessage(data: Gemini): Gemini {
    return new Gemini(data.message);
  }
}
