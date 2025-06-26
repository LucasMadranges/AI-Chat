import { Injectable, Inject } from '@nestjs/common';
import { IUserRepository, USER_REPOSITORY } from '../../../domain/users/users.repository';
import { User } from '../../../domain/users/users.entity';

@Injectable()
export class FindAllUsersUsecase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}

  async execute(): Promise<User[] | null> {
    return await this.userRepository.findAll();
  }
}
