import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsEnum, IsOptional, IsArray, ValidateNested, IsNumber, Min } from 'class-validator';
import { MealType } from './meal.dto';

export class CreateMealFoodItemDto {
  @IsNotEmpty()
  @IsString()
  foodId: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  quantity: number;

  @IsNotEmpty()
  @IsString()
  servingSize: string;
}

export class CreateMealDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  date?: string;

  @IsNotEmpty()
  @IsEnum(MealType)
  mealType: MealType;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateMealFoodItemDto)
  foodItems: CreateMealFoodItemDto[];
}
