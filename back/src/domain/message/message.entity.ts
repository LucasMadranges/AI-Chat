export class Message {
  constructor(private readonly message: string) {}

  // règle métier potentielle : on pourrait hash ici si besoin
  static sendMessage(message: string): Message {
    return new Message(message);
  }
}
