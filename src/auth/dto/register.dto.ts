import { IsNotEmpty, IsString, IsEmail, MinLength, Matches, IsOptional, IsNumber, Min } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number or special character',
  })
  password: string;

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