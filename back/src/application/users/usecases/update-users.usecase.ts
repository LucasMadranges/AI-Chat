import { Injectable, Inject } from '@nestjs/common';
import { IUserRepository, USER_REPOSITORY } from '../../../domain/users/users.repository';
import { User } from '../../../domain/users/users.entity';
import { UpdateUsersDto } from '../dto/update-users.dto';

@Injectable()
export class UpdateUsersUsecase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}

  async execute(id: number, dto: UpdateUsersDto): Promise<User | null> {
    const existing = await this.userRepository.update(id, dto);
    if (existing) {
      const user = User.create(dto.username, dto.email, dto.password);
      return this.userRepository.update(id, user);
    }
    return null;
  }
}
