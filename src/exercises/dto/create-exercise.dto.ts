import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsDateString, Min } from 'class-validator';

export class CreateExerciseDto {
  @ApiProperty({ example: 'Running' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 300 })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  caloriesBurned: number;

  @ApiProperty({ example: 30 })
  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  duration: number;

  @ApiProperty({ example: '2023-10-15T17:00:00Z' })
  @IsDateString()
  @IsNotEmpty()
  date: Date;
}