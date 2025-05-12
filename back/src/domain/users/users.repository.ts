// domain/users/user.repository.ts
import { User } from './users.entity';

export const USER_REPOSITORY = Symbol('USER_REPOSITORY');

export interface IUserRepository {
  create(user: User): Promise<User>;

  findByEmail(email: string): Promise<User | null>;
}
