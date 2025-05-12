import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @IsString()
  @ApiProperty({ example: 'Ceci est une question à Gemini' })
  message: string;
}
