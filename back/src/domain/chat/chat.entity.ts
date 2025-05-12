export class Chat {
  constructor(private readonly label: string) {}

  static readAll(data: Chat): Chat {
    return new Chat(data.label);
  }
}
