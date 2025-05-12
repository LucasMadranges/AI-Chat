// infrastructure/users/prisma-user.repository.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/service/prisma.service';
import { User } from '../../domain/users/users.entity';
import { IUserRepository } from '../../domain/users/users.repository';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.users.findUnique({
      where: {
        email,
      },
    });
    if (!user) return null;
    return new User(user.username, user.email, user.password);
  }

  async create(user: User): Promise<User> {
    const created = await this.prisma.users.create({
      data: {
        username: user.username,
        email: user.email,
        password: user.password,
      },
    });
    return new User(created.username, created.email, created.password);
  }
}
