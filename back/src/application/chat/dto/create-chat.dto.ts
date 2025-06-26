import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateChatDto {
  @IsString()
  @ApiProperty({ example: 'Chat 1' })
  label: string;
}
