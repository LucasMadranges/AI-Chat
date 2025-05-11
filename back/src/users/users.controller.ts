import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from '../../libs/dto/users/create-users.dto';
import { UpdateUsersDto } from '../../libs/dto/users/update-users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() data: CreateUsersDto) {
    return this.usersService.createUser(data);
  }

  @Put(':id')
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateUsersDto) {
    return this.usersService.updateUser(id, data);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
}
