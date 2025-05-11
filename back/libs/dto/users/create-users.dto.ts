import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersDto {
  @IsString()
  @ApiProperty({ example: 'johndoe' })
  username: string;

  @IsString()
  @ApiProperty({ example: 'securePassword123' })
  @MinLength(6)
  password: string;
}
