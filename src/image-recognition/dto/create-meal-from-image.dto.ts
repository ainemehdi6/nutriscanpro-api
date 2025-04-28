import { IsBase64, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { MealType } from '../../meal/dto/meal.dto';

export class CreateMealFromImageDto {
  @IsNotEmpty()
  @IsString()
  @IsBase64()
  base64Image: string;
  
  @IsNotEmpty()
  @IsString()
  @IsUUID()
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
  
  @IsOptional()
  @IsNumber()
  quantity?: number;
  
  @IsOptional()
  @IsString()
  servingSize?: string;
}