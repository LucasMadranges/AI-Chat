import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/service/prisma.service';
import { CreateUsersDto } from '../../libs/dto/users/create-users.dto';
import { UpdateUsersDto } from '../../libs/dto/users/update-users.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.users.findMany();
  }

  async getUserById(id: number) {
    return this.prisma.users.findUnique({ where: { id } });
  }

  async createUser(data: CreateUsersDto) {
    return this.prisma.users.create({ data });
  }

  async updateUser(id: number, data: UpdateUsersDto) {
    return this.prisma.users.update({ where: { id }, data });
  }

  async deleteUser(id: number) {
    return this.prisma.users.delete({ where: { id } });
  }
}
