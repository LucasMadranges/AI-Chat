export class User {
  constructor(
    public readonly username: string,
    public readonly email: string,
    public readonly password: string
  ) {}

  static create(username: string, email: string, password: string): User {
    return new User(username, email, password);
  }
}
