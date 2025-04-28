import { IsNotEmpty, IsNumber, IsString, IsOptional, Min } from 'class-validator';

export class CreateFoodDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  barcode?: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  calories: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  proteins: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  carbs: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  fats: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  servingSize: number;

  @IsNotEmpty()
  @IsString()
  servingUnit: string;
}
