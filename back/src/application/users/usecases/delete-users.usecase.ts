import { Injectable, Inject } from '@nestjs/common';
import { IUserRepository, USER_REPOSITORY } from '../../../domain/users/users.repository';

@Injectable()
export class DeleteUsersUsecase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}

  async execute(id: number): Promise<void> {
    return await this.userRepository.delete(id);
  }
}
