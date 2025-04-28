import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsEnum, IsDate, IsOptional, IsArray, ValidateNested, IsNumber, Min } from 'class-validator';

export enum MealType {
  BREAKFAST = 'breakfast',
  LUNCH = 'lunch',
  DINNER = 'dinner',
  SNACK = 'snack',
}

export class NutritionalValuesDto {
  @IsNumber()
  @Min(0)
  calories: number;

  @IsNumber()
  @Min(0)
  proteins: number;

  @IsNumber()
  @Min(0)
  carbs: number;

  @IsNumber()
  @Min(0)
  fats: number;
}

export class MealFoodItemDto {
  @IsNotEmpty()
  @IsString()
  foodId: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  quantity: number;

  @IsNotEmpty()
  @IsString()
  servingSize: string;

  @IsOptional()
  nutritionalValues?: NutritionalValuesDto;
}

export class MealDto {
  @IsOptional()
  id?: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  date?: string;

  @IsNotEmpty()
  @IsEnum(MealType)
  mealType: MealType;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MealFoodItemDto)
  foodItems: MealFoodItemDto[];

  @IsOptional()
  totalNutritionalValues?: NutritionalValuesDto;
}
