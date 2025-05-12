import { Controller, Post, Body } from '@nestjs/common';
import { CreateUsersDto } from '../application/users/dto/create-users.dto';
import { CreateUsersUsecase } from '../application/users/usecases/create-users.usecase';

@Controller('users')
export class UsersController {
  constructor(private readonly createUsersUsecase: CreateUsersUsecase) {}

  @Post()
  createUser(@Body() data: CreateUsersDto) {
    return this.createUsersUsecase.execute(data);
  }
}
