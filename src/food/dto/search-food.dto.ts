import { IsNotEmpty, IsString } from 'class-validator';

export class SearchFoodDto {
  @IsNotEmpty()
  @IsString()
  query: string;
}
