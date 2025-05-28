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
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { GoalsService } from './goals.service';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('goals')
@Controller('goals')
@UseGuards(JwtAuthGuard)
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @ApiOperation({ summary: 'Create a new goal' })
  @ApiResponse({ status: 201, description: 'Goal created successfully' })
  @ApiBearerAuth()
  @Post()
  create(@Request() req: any, @Body() createGoalDto: CreateGoalDto) {
    return this.goalsService.create(req.user.id, createGoalDto);
  }

  @ApiOperation({ summary: 'Get all goals for user' })
  @ApiResponse({ status: 200, description: 'Return all goals for user' })
  @ApiBearerAuth()
  @Get()
  findAll(@Request() req: any) {
    return this.goalsService.findAll(req.user.id);
  }

  @ApiOperation({ summary: 'Get active goal for user' })
  @ApiResponse({ status: 200, description: 'Return active goal' })
  @ApiResponse({ status: 404, description: 'No active goal found' })
  @ApiBearerAuth()
  @Get('active')
  getActiveGoal(@Request() req: any) {
    return this.goalsService.getActiveGoal(req.user.id);
  }

  @ApiOperation({ summary: 'Get goal by ID' })
  @ApiResponse({ status: 200, description: 'Return goal by ID' })
  @ApiResponse({ status: 404, description: 'Goal not found' })
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string, @Request() req: any) {
    return this.goalsService.findOne(id, req.user.id);
  }

  @ApiOperation({ summary: 'Update goal' })
  @ApiResponse({ status: 200, description: 'Goal updated successfully' })
  @ApiResponse({ status: 404, description: 'Goal not found' })
  @ApiBearerAuth()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGoalDto: UpdateGoalDto,
    @Request() req: any,
  ) {
    return this.goalsService.update(id, req.user.id, updateGoalDto);
  }

  @ApiOperation({ summary: 'Delete goal' })
  @ApiResponse({ status: 200, description: 'Goal deleted successfully' })
  @ApiResponse({ status: 404, description: 'Goal not found' })
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req: any) {
    return this.goalsService.remove(id, req.user.id);
  }
}