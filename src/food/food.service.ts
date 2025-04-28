import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateFoodDto } from './dto/create-food.dto';
import { FoodItemDto } from './dto/food-item.dto';
import { FoodEntity } from './entities/food.entity';
import { DatabaseService } from '../database/database.service';
import { FoodRecognitionResultDto } from '../image-recognition/dto/food-recognition-result.dto';
import { get } from 'http';

@Injectable()
export class FoodService {
  private readonly baseUrl   = process.env.NUTRITIONIX_V2_BASE_URL!;
  private readonly appId     = process.env.NUTRITIONIX_APP_ID!;
  private readonly appKey    = process.env.NUTRITIONIX_APP_KEY!;
  
  constructor(private readonly databaseService: DatabaseService) {}

  getAllFoods(): FoodItemDto[] {
    const foods = this.databaseService.getAllFoods();
    return foods.map(food => this.mapToDto(food));
  }

  getFoodById(id: string): FoodItemDto | null {
    const food = this.databaseService.getFoodById(id);
    return food ? this.mapToDto(food) : null;
  }

  searchFoods(query: string): FoodItemDto[] {
    const foods = this.databaseService.searchFood(query);
    return foods.map(food => this.mapToDto(food));
  }

  async getFoodByBarcode(barcode: string): Promise<FoodItemDto | null> {
    const foods = this.databaseService.getAllFoods();
    const food = foods.find(f => f.barcode === barcode);

    if (food) {
      return this.mapToDto(food);
    }
  
    const externalFood = await this.getFoodByBarcodeExternal(barcode);
    return externalFood;
  }

  async getFoodByBarcodeExternal(barcode: string): Promise<FoodItemDto | null> {
    const url = `${this.baseUrl}/search/item?upc=${barcode}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-app-id':  this.appId,
        'x-app-key': this.appKey,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (!response.ok) {
      console.error('Nutritionix v2 lookup failed', response.status);
      return null;
    }

    const data = await response.json();
    if (!data.foods?.length) return null;

    const f = data.foods[0];
    // Map to your DTO
    const result: CreateFoodDto = {
      name:         f.food_name,
      barcode,
      calories:     f.nf_calories,
      proteins:     f.nf_protein,
      carbs:        f.nf_total_carbohydrate,
      fats:         f.nf_total_fat,
      servingSize:  f.serving_qty,
      servingUnit:  f.serving_unit,
    };

    // Optionally persist for future lookups
    return this.createFood(result);
  }

  // Method to create a new food item
  createFood(createFoodDto: CreateFoodDto): FoodItemDto {
    const foods = this.databaseService.getAllFoods();
    const existingFood = foods.find(
      f => f.barcode === createFoodDto.barcode
    );
    
    if (existingFood && createFoodDto.barcode) {
      throw new Error(`Food with barcode ${createFoodDto.barcode} already exists`);
    }

    const newFood: FoodEntity = {
      id: uuidv4(),
      ...createFoodDto,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const savedFood = this.databaseService.createFood(newFood);
    return this.mapToDto(savedFood);
  }

  updateFood(id: string, updateFoodDto: CreateFoodDto): FoodItemDto | null {
    const food = this.databaseService.getFoodById(id);
    if (!food) {
      return null;
    }

    const updatedFood = this.databaseService.updateFood(id, {
      ...updateFoodDto,
      updatedAt: new Date().toISOString(),
    });

    return updatedFood ? this.mapToDto(updatedFood) : null;
  }

  deleteFood(id: string): boolean {
    return this.databaseService.deleteFood(id);
  }

  private mapToDto(food: FoodEntity): FoodItemDto {
    const { id, name, barcode, calories, proteins, carbs, fats, servingSize, servingUnit } = food;
    
    return {
      id,
      name,
      barcode,
      nutritionalValues: {
        calories,
        proteins,
        carbs,
        fats,
      },
      servingSize,
      servingUnit,
    };
  }

  /**
   * Convert a food recognition result from OpenAI to a food entity that can be saved
   * @param recognitionResult The result from the image recognition API
   * @param servingUnit Optional serving unit, defaults to 'g' (grams)
   * @param servingSize Optional serving size, defaults to 100
   * @returns A CreateFoodDto that can be used to create a new food item
   */
  createFoodFromRecognitionResult(
    recognitionResult: FoodRecognitionResultDto,
    servingUnit: string = 'g',
    servingSize: number = 100
  ): CreateFoodDto {
    return {
      name: recognitionResult.foodName,
      calories: recognitionResult.nutritionalInfo.calories,
      proteins: recognitionResult.nutritionalInfo.proteins,
      carbs: recognitionResult.nutritionalInfo.carbs,
      fats: recognitionResult.nutritionalInfo.fats,
      servingSize,
      servingUnit,
    };
  }
}
