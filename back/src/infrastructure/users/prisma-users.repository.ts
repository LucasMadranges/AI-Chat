import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/service/prisma.service';
import { User } from '../../domain/users/users.entity';
import { IUserRepository } from '../../domain/users/users.repository';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<User[] | null> {
    const users = await this.prisma.users.findMany();
    if (!users) return null;
    return users.map(user => new User(user.username, user.email, user.password));
  }

  async findById(id: number): Promise<User | null> {
    const user = await this.prisma.users.findUnique({
      where: {
        id,
      },
    });
    if (!user) return null;
    else return user;
  }

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

  async update(id: number, user: User): Promise<User | null> {
    const updated = await this.prisma.users.update({
      where: {
        id,
      },
      data: {
        username: user.username,
        email: user.email,
        password: user.password,
      },
    });

    if (!updated) return null;
    else return updated;
  }

  async delete(id: number): Promise<void> {
    await this.prisma.users.delete({
      where: {
        id,
      },
    });
  }
}
