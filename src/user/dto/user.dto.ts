import { IsNotEmpty, IsString, IsEmail, IsNumber, IsOptional, Min } from 'class-validator';

export class UserDto {
  @IsOptional()
  id?: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
  
  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  weightInKg?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  heightInCm?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  dailyCalorieGoal?: number;
}
