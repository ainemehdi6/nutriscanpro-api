import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateGoalDto {
  @ApiProperty({ example: 2000 })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  calories: number;

  @ApiProperty({ example: 150 })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  protein: number;

  @ApiProperty({ example: 200 })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  carbs: number;

  @ApiProperty({ example: 65 })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  fat: number;
}