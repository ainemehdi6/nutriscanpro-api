import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AnalyzeTextDto {
  @ApiProperty({ example: 'I had a caesar salad with grilled chicken for lunch' })
  @IsString()
  @IsNotEmpty()
  description: string;
  text: any;
}