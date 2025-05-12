export class Message {
  constructor(
    private readonly message: string,
    private readonly chatId: number
  ) {}

  static readAll(data: Message): Message {
    return new Message(data.message, data.chatId);
  }
}
