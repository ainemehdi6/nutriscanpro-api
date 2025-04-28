import { IsBase64, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class SaveRecognizedFoodDto {
  @IsNotEmpty()
  @IsString()
  @IsBase64()
  base64Image: string;
  
  @IsOptional()
  @IsString()
  servingUnit?: string;
  
  @IsOptional()
  @IsNumber()
  servingSize?: number;
}