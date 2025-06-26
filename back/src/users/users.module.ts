// users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { CreateUsersUsecase } from '../application/users/usecases/create-users.usecase';
import { PrismaService } from '../../prisma/service/prisma.service';
import { PrismaUserRepository } from '../infrastructure/users/prisma-users.repository';
import { USER_REPOSITORY } from '../domain/users/users.repository';
import { FindAllUsersUsecase } from '../application/users/usecases/find-all-users.usecase';
import { FindUsersByIdUsecase } from '../application/users/usecases/find-users-by-id.usecase';
import { FindUsersByEmailUsecase } from '../application/users/usecases/find-users-by-email.usecase';
import { UpdateUsersUsecase } from '../application/users/usecases/update-users.usecase';
import { DeleteUsersUsecase } from '../application/users/usecases/delete-users.usecase';

@Module({
  controllers: [UsersController],
  providers: [
    // Usecase
    FindAllUsersUsecase,
    FindUsersByIdUsecase,
    FindUsersByEmailUsecase,
    CreateUsersUsecase,
    UpdateUsersUsecase,
    DeleteUsersUsecase,

    // Service
    PrismaService,
    {
      provide: USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
  ],
})
export class UsersModule {}
