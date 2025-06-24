import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Query,
  BadRequestException,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiQuery,
  ApiBody,
  ApiConsumes,
} from '@nestjs/swagger';
import { MealsService } from './meals.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { AddMealItemDto } from './dto/add-meal-item.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { AnalyzeImageDto } from '@/ai-analysis/dto/analyze-image.dto';
import { AnalyzeTextDto } from '@/ai-analysis/dto/analyze-text.dto';
import { CreateFoodDto } from '@/foods/dto/create-food.dto';

@ApiTags('meals')
@Controller('meals')
@UseGuards(JwtAuthGuard)
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @ApiOperation({ summary: 'Create a new meal' })
  @ApiResponse({ status: 201, description: 'Meal created successfully' })
  @ApiBearerAuth()
  @Post()
  create(@Request() req: any, @Body() createMealDto: CreateMealDto) {
    return this.mealsService.create(req.user.id, createMealDto);
  }

  @ApiOperation({ summary: 'Get all meals for user' })
  @ApiResponse({ status: 200, description: 'Return all meals for user' })
  @ApiBearerAuth()
  @Get()
  findAll(@Request() req: any) {
    return this.mealsService.findAll(req.user.id);
  }

  @ApiOperation({ summary: 'Get meals for a specific date' })
  @ApiResponse({ status: 200, description: 'Return meals for date' })
  @ApiQuery({ name: 'date', required: true, type: String, description: 'Date in ISO format' })
  @ApiBearerAuth()
  @Get('date')
  findByDate(@Request() req: any, @Query('date') dateString: string) {
    const date = new Date(dateString);
    return this.mealsService.findByDate(req.user.id, date);
  }

  @ApiOperation({ summary: 'Get meal by ID' })
  @ApiResponse({ status: 200, description: 'Return meal by ID' })
  @ApiResponse({ status: 404, description: 'Meal not found' })
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string, @Request() req: any) {
    return this.mealsService.findOne(id, req.user.id);
  }

  @ApiOperation({ summary: 'Update meal' })
  @ApiResponse({ status: 200, description: 'Meal updated successfully' })
  @ApiResponse({ status: 404, description: 'Meal not found' })
  @ApiBearerAuth()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMealDto: UpdateMealDto,
    @Request() req: any,
  ) {
    return this.mealsService.update(id, req.user.id, updateMealDto);
  }

  @ApiOperation({ summary: 'Delete meal' })
  @ApiResponse({ status: 200, description: 'Meal deleted successfully' })
  @ApiResponse({ status: 404, description: 'Meal not found' })
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req: any) {
    return this.mealsService.remove(id, req.user.id);
  }

  @ApiOperation({ summary: 'Add food item to meal' })
  @ApiResponse({ status: 201, description: 'Food item added to meal successfully' })
  @ApiResponse({ status: 404, description: 'Meal or food not found' })
  @ApiBearerAuth()
  @Post(':id/items')
  addMealItem(
    @Param('id') id: string,
    @Body() addMealItemDto: AddMealItemDto,
    @Request() req: any,
  ) {
    return this.mealsService.addMealItem(id, req.user.id, addMealItemDto);
  }

  @ApiOperation({ summary: 'Remove food item from meal' })
  @ApiResponse({ status: 200, description: 'Food item removed from meal successfully' })
  @ApiResponse({ status: 404, description: 'Meal or food item not found' })
  @ApiBearerAuth()
  @Delete(':mealId/items/:itemId')
  removeMealItem(
    @Param('mealId') mealId: string,
    @Param('itemId') itemId: string,
    @Request() req: any,
  ) {
    return this.mealsService.removeMealItem(mealId, itemId, req.user.id);
  }

  @ApiOperation({ summary: 'Analyze image and add meal items' })
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description: 'Image file to analyze',
        },
      },
      required: ['file'],
    },
  })
  @Post(':id/analyze-image')
  @UseInterceptors(FileInterceptor('file'))
  async analyzeAndAddImage(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Request() req: any,
  ) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }
    const base64Image = file.buffer.toString('base64');
    return this.mealsService.analyzeAndAddMealItems(id, req.user.id, {
      base64Image: base64Image 
    });
  }

  @ApiOperation({ summary: 'Analyze text and add meal items' })
  @ApiResponse({ status: 201, description: 'Text analyzed and meal items added successfully' })
  @ApiBearerAuth()
  @Post(':id/analyze-text')
  analyzeAndAddText(
    @Param('id') id: string,
    @Body() analyzeTextDto: AnalyzeTextDto,
    @Request() req: any,
  ) {
    return this.mealsService.analyzeAndAddMealItems(id, req.user.id, {
      description: analyzeTextDto.description,
    });
  }

  @ApiOperation({ summary: 'Create and Add list off Foods to Meal' })
  @ApiResponse({ status: 201, description: 'Foods added successfully' })
  @ApiBearerAuth()
  @Post(':id/add-new-foods')
  async addFoods(
  @Param('id') mealId: string,
  @Body() body: { foods: CreateFoodDto[] },
  @Request() req: any
  ) {
    return this.mealsService.addFoodsToMeal(mealId, req.user.id, body);
  }
}
