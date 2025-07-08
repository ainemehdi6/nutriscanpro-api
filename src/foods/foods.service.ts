import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';

@Injectable()
export class FoodsService {
  constructor(private prisma: PrismaService) {}

  private parseNumericString(value: any): number | null {
    if (value === null || value === undefined || typeof value !== 'string') {
      return null;
    }
    
    let trimmedValue = value.trim();
    if (trimmedValue === '') {
      return null;
    }
    
    if (trimmedValue.toLowerCase().endsWith('g')) {
      trimmedValue = trimmedValue.slice(0, -1).trim();
    }
    
    const parsed = parseFloat(trimmedValue);
    return isNaN(parsed) ? null : parsed;
  }

  async create(createFoodDto: CreateFoodDto) {
    const {
      quantity,
      ...safeFoodData
    } = createFoodDto;
    
    return this.prisma.food.create({
      data: safeFoodData,
    });
  }

  async findAll(name?: string) {
    if (name) {
      return this.prisma.food.findMany({
        where: {
          name: {
            contains: name.toLowerCase(),
          },
        },
      });
    }
    
    return this.prisma.food.findMany();
  }

  async findOne(id: string) {
    const food = await this.prisma.food.findUnique({
      where: { id },
    });
    
    if (!food) {
      throw new NotFoundException(`Food with ID "${id}" not found`);
    }
    
    return food;
  }

  async findByBarcode(barcode: string) {
    try {
      const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
      
      if (!response.ok) {
        throw new InternalServerErrorException('Failed to fetch from external API');
      }

      const data = await response.json();

      if (data.status !== 1 || !data.product) {
        throw new NotFoundException(`Food with barcode "${barcode}" not found in external database`);
      }

      const product = data.product;

      const createFoodDto: CreateFoodDto = {
        name:
          product.product_name?.trim() ||
          product.product_name_en?.trim() ||
          product.product_name_fr?.trim() ||
          'Unknown Product',
        barcode: product.code,
        calories: product.nutriments?.['energy-kcal_100g'] || 0,
        protein: product.nutriments?.['proteins_100g'] || 0,
        carbs: product.nutriments?.['carbohydrates_100g'] || 0,
        fat: product.nutriments?.['fat_100g'] || 0,
        servingSize: this.parseNumericString(product.nutrition_data_per) || 100,
        servingUnit: 'g',
      };

      return await this.prisma.food.create({ data: createFoodDto });
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Failed to fetch food from external API');
    }
  }

  async update(id: string, updateFoodDto: UpdateFoodDto) {
    try {
      return await this.prisma.food.update({
        where: { id },
        data: updateFoodDto,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Food with ID "${id}" not found`);
      }
      throw error;
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.food.delete({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Food with ID "${id}" not found`);
      }
      throw error;
    }
  }
}