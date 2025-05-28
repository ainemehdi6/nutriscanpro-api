import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { FoodsService } from './foods.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@ApiTags('foods')
@Controller('foods')
@UseGuards(JwtAuthGuard)
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @ApiOperation({ summary: 'Create a new food (admin only)' })
  @ApiResponse({ status: 201, description: 'Food created successfully' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Post()
  create(@Body() createFoodDto: CreateFoodDto) {
    return this.foodsService.create(createFoodDto);
  }

  @ApiOperation({ summary: 'Get all foods with optional name filter' })
  @ApiResponse({ status: 200, description: 'Return all foods' })
  @ApiQuery({ name: 'name', required: false, description: 'Filter foods by name' })
  @ApiBearerAuth()
  @Get()
  findAll(@Query('name') name?: string) {
    return this.foodsService.findAll(name);
  }

  @ApiOperation({ summary: 'Get food by ID' })
  @ApiResponse({ status: 200, description: 'Return food by ID' })
  @ApiResponse({ status: 404, description: 'Food not found' })
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodsService.findOne(id);
  }

  @ApiOperation({ summary: 'Get food by barcode' })
  @ApiResponse({ status: 200, description: 'Return food by barcode' })
  @ApiResponse({ status: 404, description: 'Food not found' })
  @ApiBearerAuth()
  @Get('barcode/:barcode')
  findByBarcode(@Param('barcode') barcode: string) {
    return this.foodsService.findByBarcode(barcode);
  }

  @ApiOperation({ summary: 'Update food (admin only)' })
  @ApiResponse({ status: 200, description: 'Food updated successfully' })
  @ApiResponse({ status: 404, description: 'Food not found' })
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoodDto: UpdateFoodDto) {
    return this.foodsService.update(id, updateFoodDto);
  }

  @ApiOperation({ summary: 'Delete food (admin only)' })
  @ApiResponse({ status: 200, description: 'Food deleted successfully' })
  @ApiResponse({ status: 404, description: 'Food not found' })
  @ApiBearerAuth()
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodsService.remove(id);
  }
}