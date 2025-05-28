import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class AnalyzeImageDto {
  @ApiProperty({ required: false, description: 'Additional context about the image' })
  @IsString()
  @IsOptional()
  context?: string;
}