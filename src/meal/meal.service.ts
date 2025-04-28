import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { MealDto } from './dto/meal.dto';
import { CreateMealDto } from './dto/create-meal.dto';
import { MealEntity } from './entities/meal.entity';
import { DatabaseService } from '../database/database.service';
import { FoodService } from '../food/food.service';

@Injectable()
export class MealService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly foodService: FoodService,
  ) {}

  getAllMeals(): MealDto[] {
    const meals = this.databaseService.getAllMeals();
    return meals.map(meal => this.mapToDto(meal));
  }

  getMealById(id: string): MealDto | null {
    const meal = this.databaseService.getMealById(id);
    return meal ? this.mapToDto(meal) : null;
  }

  getMealsByUserId(userId: string): MealDto[] {
    const meals = this.databaseService.getMealsByUserId(userId);
    return meals.map(meal => this.mapToDto(meal));
  }

  createMeal(createMealDto: CreateMealDto): MealDto {
    // Validate that all food items exist
    for (const item of createMealDto.foodItems) {
      const food = this.foodService.getFoodById(item.foodId);
      if (!food) {
        throw new NotFoundException(`Food with ID ${item.foodId} not found`);
      }
    }

    const newMeal: MealEntity = {
      id: uuidv4(),
      userId: createMealDto.userId,
      name: createMealDto.name,
      date: createMealDto.date || new Date().toISOString(),
      mealType: createMealDto.mealType,
      foodItems: createMealDto.foodItems.map(item => ({
        foodId: item.foodId,
        quantity: item.quantity,
        servingSize: item.servingSize,
      })),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const savedMeal = this.databaseService.createMeal(newMeal);
    return this.mapToDto(savedMeal);
  }

  updateMeal(id: string, updateMealDto: CreateMealDto): MealDto | null {
    const meal = this.databaseService.getMealById(id);
    if (!meal) {
      return null;
    }

    // Validate that all food items exist
    for (const item of updateMealDto.foodItems) {
      const food = this.foodService.getFoodById(item.foodId);
      if (!food) {
        throw new NotFoundException(`Food with ID ${item.foodId} not found`);
      }
    }

    const updatedMeal = this.databaseService.updateMeal(id, {
      ...updateMealDto,
      updatedAt: new Date().toISOString(),
    });

    return updatedMeal ? this.mapToDto(updatedMeal) : null;
  }

  deleteMeal(id: string): boolean {
    return this.databaseService.deleteMeal(id);
  }

  private mapToDto(meal: MealEntity): MealDto {
    const foodItems = meal.foodItems.map(item => {
      const food = this.foodService.getFoodById(item.foodId);
      const ratio = item.quantity / (food?.servingSize || 1);
      
      return {
        foodId: item.foodId,
        name: food?.name || 'Unknown Food',
        quantity: item.quantity,
        servingSize: item.servingSize,
        nutritionalValues: food?.nutritionalValues 
          ? {
              calories: food.nutritionalValues.calories * ratio,
              proteins: food.nutritionalValues.proteins * ratio,
              carbs: food.nutritionalValues.carbs * ratio,
              fats: food.nutritionalValues.fats * ratio,
            }
          : {
              calories: 0,
              proteins: 0,
              carbs: 0,
              fats: 0,
            },
      };
    });

    // Calculate total nutritional values
    const totalNutritionalValues = foodItems.reduce(
      (acc, item) => {
        return {
          calories: acc.calories + (item.nutritionalValues?.calories || 0),
          proteins: acc.proteins + (item.nutritionalValues?.proteins || 0),
          carbs: acc.carbs + (item.nutritionalValues?.carbs || 0),
          fats: acc.fats + (item.nutritionalValues?.fats || 0),
        };
      },
      { calories: 0, proteins: 0, carbs: 0, fats: 0 }
    );

    return {
      id: meal.id,
      userId: meal.userId,
      name: meal.name,
      date: meal.date,
      mealType: meal.mealType,
      foodItems,
      totalNutritionalValues: totalNutritionalValues,
    };
  }
}
