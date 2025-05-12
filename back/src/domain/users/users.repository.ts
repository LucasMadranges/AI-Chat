import { User } from './users.entity';

export const USER_REPOSITORY = Symbol('USER_REPOSITORY');

export interface IUserRepository {
  findAll(): Promise<User[] | null>;

  findById(id: number): Promise<User | null>;

  findByEmail(email: string): Promise<User | null>;

  create(user: User): Promise<User>;

  update(id: number, user: User): Promise<User>;

  delete(id: number): Promise<void>;
}
