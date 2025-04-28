import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { MealService } from './meal.service';
import { MealDto } from './dto/meal.dto';
import { CreateMealDto } from './dto/create-meal.dto';

@Controller('meals')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @Get()
  getAllMeals(): MealDto[] {
    return this.mealService.getAllMeals();
  }

  @Get('user/:userId')
  getMealsByUserId(@Param('userId') userId: string): MealDto[] {
    return this.mealService.getMealsByUserId(userId);
  }

  @Get(':id')
  getMealById(@Param('id') id: string): MealDto {
    const meal = this.mealService.getMealById(id);
    if (!meal) {
      throw new NotFoundException(`Meal with ID ${id} not found`);
    }
    return meal;
  }

  @Post()
  createMeal(@Body() createMealDto: CreateMealDto): MealDto {
    try {
      return this.mealService.createMeal(createMealDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Put(':id')
  updateMeal(
    @Param('id') id: string,
    @Body() updateMealDto: CreateMealDto,
  ): MealDto {
    const meal = this.mealService.updateMeal(id, updateMealDto);
    if (!meal) {
      throw new NotFoundException(`Meal with ID ${id} not found`);
    }
    return meal;
  }

  @Delete(':id')
  deleteMeal(@Param('id') id: string): { success: boolean; message: string } {
    const deleted = this.mealService.deleteMeal(id);
    if (!deleted) {
      throw new NotFoundException(`Meal with ID ${id} not found`);
    }
    return {
      success: true,
      message: `Meal with ID ${id} successfully deleted`,
    };
  }
}
