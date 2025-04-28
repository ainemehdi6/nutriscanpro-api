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
import { FoodService } from './food.service';
import { FoodItemDto } from './dto/food-item.dto';
import { CreateFoodDto } from './dto/create-food.dto';
import { SearchFoodDto } from './dto/search-food.dto';

@Controller('foods')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get()
  getAllFoods(): FoodItemDto[] {
    return this.foodService.getAllFoods();
  }

  @Get('search')
  searchFoods(@Query() searchDto: SearchFoodDto): FoodItemDto[] {
    return this.foodService.searchFoods(searchDto.query);
  }

  @Get('barcode/:barcode')
  async getFoodByBarcode(@Param('barcode') barcode: string): Promise<FoodItemDto> {
    const food = await this.foodService.getFoodByBarcode(barcode);
    if (!food) {
      throw new NotFoundException(`Food with barcode ${barcode} not found`);
    }
    return food;
  }

  @Get(':id')
  getFoodById(@Param('id') id: string): FoodItemDto {
    const food = this.foodService.getFoodById(id);
    if (!food) {
      throw new NotFoundException(`Food with ID ${id} not found`);
    }
    return food;
  }

  @Post()
  createFood(@Body() createFoodDto: CreateFoodDto): FoodItemDto {
    try {
      return this.foodService.createFood(createFoodDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Put(':id')
  updateFood(
    @Param('id') id: string,
    @Body() updateFoodDto: CreateFoodDto,
  ): FoodItemDto {
    const food = this.foodService.updateFood(id, updateFoodDto);
    if (!food) {
      throw new NotFoundException(`Food with ID ${id} not found`);
    }
    return food;
  }

  @Delete(':id')
  deleteFood(@Param('id') id: string): { success: boolean; message: string } {
    const deleted = this.foodService.deleteFood(id);
    if (!deleted) {
      throw new NotFoundException(`Food with ID ${id} not found`);
    }
    return {
      success: true,
      message: `Food with ID ${id} successfully deleted`,
    };
  }
}
