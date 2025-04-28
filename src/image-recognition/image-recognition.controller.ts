import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ImageRecognitionService } from './image-recognition.service';
import { AnalyzeImageDto } from './dto/analyze-image.dto';
import { FoodRecognitionResultDto } from './dto/food-recognition-result.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SaveRecognizedFoodDto } from './dto/save-recognized-food.dto';
import { FoodItemDto } from '../food/dto/food-item.dto';
import { FoodService } from '../food/food.service';
import { CreateMealFromImageDto } from './dto/create-meal-from-image.dto';
import { MealDto } from '../meal/dto/meal.dto';
import { MealService } from '../meal/meal.service';

@Controller('image-recognition')
export class ImageRecognitionController {
  constructor(
    private readonly imageRecognitionService: ImageRecognitionService,
    private readonly foodService: FoodService,
    private readonly mealService: MealService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('analyze')
  async analyzeImage(@Body() analyzeImageDto: AnalyzeImageDto): Promise<FoodRecognitionResultDto> {
    return this.imageRecognitionService.analyzeImage(analyzeImageDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('analyze-and-save')
  async analyzeAndSaveFood(@Body() saveRecognizedFoodDto: SaveRecognizedFoodDto): Promise<FoodItemDto> {
    const analyzeDto: AnalyzeImageDto = { base64Image: saveRecognizedFoodDto.base64Image };
    const recognitionResult = await this.imageRecognitionService.analyzeImage(analyzeDto);
    
    const foodDto = this.foodService.createFoodFromRecognitionResult(
      recognitionResult,
      saveRecognizedFoodDto.servingUnit,
      saveRecognizedFoodDto.servingSize
    );
    
    return this.foodService.createFood(foodDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('create-meal')
  async createMealFromImage(@Body() createMealDto: CreateMealFromImageDto): Promise<MealDto> {
    // First analyze the image to get food information
    const analyzeDto: AnalyzeImageDto = { base64Image: createMealDto.base64Image };
    const recognitionResult = await this.imageRecognitionService.analyzeImage(analyzeDto);
    
    // Next save the food to the database
    const foodDto = this.foodService.createFoodFromRecognitionResult(
      recognitionResult,
      createMealDto.servingSize || 'g',
      createMealDto.quantity || 100
    );
    
    const savedFood = await this.foodService.createFood(foodDto);
    
    // Create a meal with the recognized food
    return this.mealService.createMeal({
      userId: createMealDto.userId,
      name: createMealDto.name,
      date: createMealDto.date || new Date().toISOString(),
      mealType: createMealDto.mealType,
      foodItems: [
        {
          foodId: savedFood.id,
          quantity: createMealDto.quantity || 1,
          servingSize: createMealDto.servingSize || 'portion'
        }
      ]
    });
  }
}