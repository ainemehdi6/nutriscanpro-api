import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { AddMealItemDto } from './dto/add-meal-item.dto';
import { FoodsService } from '../foods/foods.service';
import { AiAnalysisService } from '@/ai-analysis/ai-analysis.service';

@Injectable()
export class MealsService {
  constructor(
    private prisma: PrismaService,
    private foodsService: FoodsService,
    private aiAnalysisService: AiAnalysisService
  ) {}

  async create(userId: string, createMealDto: CreateMealDto) {
    return this.prisma.meal.create({
      data: {
        userId,
        type: createMealDto.type,
        date: createMealDto.date,
      },
      include: {
        items: {
          include: {
            food: true,
          },
        },
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.meal.findMany({
      where: { userId },
      include: {
        items: {
          include: {
            food: true,
          },
        },
      },
    });
  }

  async findByDate(userId: string, date: Date) {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    return this.prisma.meal.findMany({
      where: {
        userId,
        date: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      include: {
        items: {
          include: {
            food: true,
          },
        },
      },
    });
  }

  async findOne(id: string, userId: string) {
    const meal = await this.prisma.meal.findUnique({
      where: { id },
      include: {
        items: {
          include: {
            food: true,
          },
        },
      },
    });
    
    if (!meal || meal.userId !== userId) {
      throw new NotFoundException(`Meal with ID "${id}" not found`);
    }
    
    return meal;
  }

  async update(id: string, userId: string, updateMealDto: UpdateMealDto) {
    // First check if the meal exists and belongs to the user
    await this.findOne(id, userId);
    
    return this.prisma.meal.update({
      where: { id },
      data: updateMealDto,
      include: {
        items: {
          include: {
            food: true,
          },
        },
      },
    });
  }

  async remove(id: string, userId: string) {
    // First check if the meal exists and belongs to the user
    await this.findOne(id, userId);
    
    return this.prisma.meal.delete({
      where: { id },
    });
  }

  async addMealItem(id: string, userId: string, addMealItemDto: AddMealItemDto) {
    // First check if the meal exists and belongs to the user
    await this.findOne(id, userId);
    
    // Check if the food exists
    await this.foodsService.findOne(addMealItemDto.foodId);
    
    return this.prisma.mealItem.create({
      data: {
        mealId: id,
        foodId: addMealItemDto.foodId,
        quantity: addMealItemDto.quantity,
        unit: addMealItemDto.unit,
      },
      include: {
        food: true,
      },
    });
  }

  async removeMealItem(mealId: string, itemId: string, userId: string) {
    // First check if the meal exists and belongs to the user
    await this.findOne(mealId, userId);
    
    // Check if the meal item exists
    const mealItem = await this.prisma.mealItem.findUnique({
      where: { id: itemId },
    });
    
    if (!mealItem || mealItem.mealId !== mealId) {
      throw new NotFoundException(`Meal item with ID "${itemId}" not found in meal "${mealId}"`);
    }
    
    return this.prisma.mealItem.delete({
      where: { id: itemId },
    });
  }

  async analyzeAndAddMealItems(mealId: string, userId: string, base64Image: string) {
    await this.findOne(mealId, userId);
  
    const analysis = await this.aiAnalysisService.analyzeImage(base64Image);
  
    const addedItems = await Promise.all(
      analysis.createFoodDtos.map(async (foodDto) => {
        const createdFood = await this.foodsService.create(foodDto);
  
        const addMealItemDto = {
          foodId: createdFood.id,
          quantity: foodDto.servingSize ?? 1, 
          unit: foodDto.servingUnit ?? 'g',
        };
  
        return this.addMealItem(mealId, userId, addMealItemDto);
      })
    );
  
    return {
      addedItems,
      totalNutrition: analysis.totalNutrition,
    };
  }
  
}