import { Controller, Post, Body, Get, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateUsersDto } from '../application/users/dto/create-users.dto';
import { CreateUsersUsecase } from '../application/users/usecases/create-users.usecase';
import { FindAllUsersUsecase } from '../application/users/usecases/find-all-users.usecase';
import { FindUsersByIdUsecase } from '../application/users/usecases/find-users-by-id.usecase';
import { FindUsersByEmailUsecase } from '../application/users/usecases/find-users-by-email.usecase';
import { UpdateUsersUsecase } from '../application/users/usecases/update-users.usecase';
import { DeleteUsersUsecase } from '../application/users/usecases/delete-users.usecase';

@Controller('users')
export class UsersController {
  constructor(
    private readonly findAllUsersUsecase: FindAllUsersUsecase,
    private readonly findUsersByIdUsecase: FindUsersByIdUsecase,
    private readonly findUsersByEmailUsecase: FindUsersByEmailUsecase,
    private readonly createUsersUsecase: CreateUsersUsecase,
    private readonly updateUsersUsecase: UpdateUsersUsecase,
    private readonly deleteUsersUsecase: DeleteUsersUsecase
  ) {}

  @Get()
  findAll() {
    return this.findAllUsersUsecase.execute();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.findUsersByIdUsecase.execute(id);
  }

  @Get('email/:email')
  findByEmail(@Param('email') email: string) {
    return this.findUsersByEmailUsecase.execute(email);
  }

  @Post()
  createUser(@Body() data: CreateUsersDto) {
    return this.createUsersUsecase.execute(data);
  }

  @Patch(':id')
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() data: CreateUsersDto) {
    return this.updateUsersUsecase.execute(id, data);
  }

  @Delete('delete/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.deleteUsersUsecase.execute(id);
  }
}
