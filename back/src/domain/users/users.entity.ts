// domain/users/user.entity.ts
export class User {
  constructor(
    public readonly username: string,
    public readonly email: string,
    public readonly password: string
  ) {}

  // règle métier potentielle : on pourrait hash ici si besoin
  static create(username: string, email: string, password: string): User {
    return new User(username, email, password);
  }
}
