import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsDateString, IsOptional, Min } from 'class-validator';

export class CreateWeightLogDto {
  @ApiProperty({ example: 75.5 })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  weight: number;

  @ApiProperty({ example: '2023-10-15T08:00:00Z', required: false })
  @IsDateString()
  @IsOptional()
  date?: Date;
}