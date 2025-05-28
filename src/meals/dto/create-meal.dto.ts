import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsDateString } from 'class-validator';
import { MealType } from '@prisma/client';

export class CreateMealDto {
  @ApiProperty({ enum: MealType, example: MealType.BREAKFAST })
  @IsEnum(MealType)
  @IsNotEmpty()
  type: MealType;

  @ApiProperty({ example: '2023-10-15T08:00:00Z' })
  @IsDateString()
  @IsNotEmpty()
  date: Date;
}