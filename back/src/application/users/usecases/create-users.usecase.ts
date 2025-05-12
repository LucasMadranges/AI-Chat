// application/users/use-cases/create-user.usecase.ts
import { Injectable, Inject } from '@nestjs/common';
import { IUserRepository, USER_REPOSITORY } from '../../../domain/users/users.repository';
import { CreateUsersDto } from '../dto/create-users.dto';
import { User } from '../../../domain/users/users.entity';

@Injectable()
export class CreateUsersUsecase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}

  async execute(dto: CreateUsersDto): Promise<User> {
    const existing = await this.userRepository.findByEmail(dto.email);
    if (existing) {
      throw new Error('Cet email est déjà utilisé');
    }

    const user = User.create(dto.username, dto.email, dto.password);
    return this.userRepository.create(user);
  }
}
