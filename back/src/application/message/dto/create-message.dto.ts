import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @IsString()
  @ApiProperty({ example: 'Coucou ça va ?' })
  message: string;

  @IsNumber()
  @ApiProperty({ example: 1 })
  chatId: number;
}
