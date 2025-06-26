import { Injectable, Inject } from '@nestjs/common';
import { IUserRepository, USER_REPOSITORY } from '../../../domain/users/users.repository';
import { User } from '../../../domain/users/users.entity';

@Injectable()
export class FindUsersByIdUsecase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}

  async execute(id: number): Promise<User | null> {
    return await this.userRepository.findById(id);
  }
}
