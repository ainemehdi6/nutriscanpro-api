import { IsBase64, IsNotEmpty, IsString } from 'class-validator';

export class AnalyzeImageDto {
  @IsNotEmpty()
  @IsString()
  @IsBase64()
  base64Image: string;
}