import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendMessageDto {
  @IsString()
  @ApiProperty({ example: 'Message' })
  message: string;
}
