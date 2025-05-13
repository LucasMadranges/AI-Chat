export class Chat {
  constructor(
    private readonly id: number,
    private readonly label: string
  ) {}

  static readAll(data: Chat): Chat {
    return new Chat(data.id, data.label);
  }
}
