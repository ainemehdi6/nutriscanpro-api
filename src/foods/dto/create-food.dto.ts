import { ApiProperty } from '@nestjs/swagger';
import { 
  IsNotEmpty, 
  IsString, 
  IsNumber, 
  IsOptional,
  Min,
  IsPositive,
} from 'class-validator';

export class CreateFoodDto {
  @ApiProperty({ example: 'Grilled Chicken Breast' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '1234567890', required: false })
  @IsString()
  @IsOptional()
  barcode?: string;

  @ApiProperty({ example: 165 })
  @IsNumber()
  @Min(0)
  calories: number;

  @ApiProperty({ example: 31 })
  @IsNumber()
  @Min(0)
  protein: number;

  @ApiProperty({ example: 0 })
  @IsNumber()
  @Min(0)
  carbs: number;

  @ApiProperty({ example: 3.6 })
  @IsNumber()
  @Min(0)
  fat: number;

  @ApiProperty({ example: 100, required: false })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  servingSize?: number;

  @ApiProperty({ example: 'g', required: false })
  @IsString()
  @IsOptional()
  servingUnit?: string;
}