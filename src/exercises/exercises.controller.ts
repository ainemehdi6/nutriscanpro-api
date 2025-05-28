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
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('exercises')
@Controller('exercises')
@UseGuards(JwtAuthGuard)
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @ApiOperation({ summary: 'Create a new exercise' })
  @ApiResponse({ status: 201, description: 'Exercise created successfully' })
  @ApiBearerAuth()
  @Post()
  create(@Request() req: any, @Body() createExerciseDto: CreateExerciseDto) {
    return this.exercisesService.create(req.user.id, createExerciseDto);
  }

  @ApiOperation({ summary: 'Get all exercises for user' })
  @ApiResponse({ status: 200, description: 'Return all exercises for user' })
  @ApiBearerAuth()
  @Get()
  findAll(@Request() req: any) {
    return this.exercisesService.findAll(req.user.id);
  }

  @ApiOperation({ summary: 'Get exercises for a specific date' })
  @ApiResponse({ status: 200, description: 'Return exercises for date' })
  @ApiQuery({ name: 'date', required: true, type: String, description: 'Date in ISO format' })
  @ApiBearerAuth()
  @Get('date')
  findByDate(@Request() req: any, @Query('date') dateString: string) {
    const date = new Date(dateString);
    return this.exercisesService.findByDate(req.user.id, date);
  }

  @ApiOperation({ summary: 'Get total calories burned for a date' })
  @ApiResponse({ status: 200, description: 'Return total calories burned for date' })
  @ApiQuery({ name: 'date', required: true, type: String, description: 'Date in ISO format' })
  @ApiBearerAuth()
  @Get('calories')
  getCaloriesByDate(@Request() req: any, @Query('date') dateString: string) {
    const date = new Date(dateString);
    return this.exercisesService.getCaloriesByDate(req.user.id, date);
  }

  @ApiOperation({ summary: 'Get exercise by ID' })
  @ApiResponse({ status: 200, description: 'Return exercise by ID' })
  @ApiResponse({ status: 404, description: 'Exercise not found' })
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string, @Request() req: any) {
    return this.exercisesService.findOne(id, req.user.id);
  }

  @ApiOperation({ summary: 'Update exercise' })
  @ApiResponse({ status: 200, description: 'Exercise updated successfully' })
  @ApiResponse({ status: 404, description: 'Exercise not found' })
  @ApiBearerAuth()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExerciseDto: UpdateExerciseDto,
    @Request() req: any,
  ) {
    return this.exercisesService.update(id, req.user.id, updateExerciseDto);
  }

  @ApiOperation({ summary: 'Delete exercise' })
  @ApiResponse({ status: 200, description: 'Exercise deleted successfully' })
  @ApiResponse({ status: 404, description: 'Exercise not found' })
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req: any) {
    return this.exercisesService.remove(id, req.user.id);
  }
}