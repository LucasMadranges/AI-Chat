import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendMessageDto {
  @IsString()
  @ApiProperty({ example: 'Coucou ça va ?' })
  message: string;
}
