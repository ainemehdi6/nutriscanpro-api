import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUUID, Min } from 'class-validator';

export class AddMealItemDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @IsUUID()
  @IsNotEmpty()
  foodId: string;

  @ApiProperty({ example: 100 })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({ example: 'g' })
  @IsString()
  @IsNotEmpty()
  unit: string;
}