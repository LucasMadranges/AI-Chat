import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @IsString()
  @ApiProperty({ example: 'Coucou ça va ?' })
  message: string;

  @IsBoolean()
  @ApiProperty({ example: true })
  isGemini: boolean;

  @IsNumber()
  @ApiProperty({ example: 1 })
  chatId: number;
}
