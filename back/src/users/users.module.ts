// users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { CreateUsersUsecase } from '../application/users/usecases/create-users.usecase';
import { PrismaService } from '../../prisma/service/prisma.service';
import { PrismaUserRepository } from '../infrastructure/users/prisma-users.repository';
import { USER_REPOSITORY } from '../domain/users/users.repository';

@Module({
  controllers: [UsersController],
  providers: [
    CreateUsersUsecase,
    PrismaService,
    {
      provide: USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
  ],
})
export class UsersModule {}
