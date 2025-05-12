import { Injectable, Inject } from '@nestjs/common';
import { IUserRepository, USER_REPOSITORY } from '../../../domain/users/users.repository';
import { User } from '../../../domain/users/users.entity';

@Injectable()
export class FindUsersByEmailUsecase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}

  async execute(email: string): Promise<User | null> {
    return await this.userRepository.findByEmail(email);
  }
}
