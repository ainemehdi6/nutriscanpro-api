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
import { ProgressService } from './progress.service';
import { CreateWeightLogDto } from './dto/create-weight-log.dto';
import { UpdateWeightLogDto } from './dto/update-weight-log.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('progress')
@Controller('progress')
@UseGuards(JwtAuthGuard)
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @ApiOperation({ summary: 'Log a new weight' })
  @ApiResponse({ status: 201, description: 'Weight logged successfully' })
  @ApiBearerAuth()
  @Post('weight')
  createWeightLog(@Request() req: any, @Body() createWeightLogDto: CreateWeightLogDto) {
    return this.progressService.createWeightLog(req.user.id, createWeightLogDto);
  }

  @ApiOperation({ summary: 'Get all weight logs' })
  @ApiResponse({ status: 200, description: 'Return all weight logs' })
  @ApiBearerAuth()
  @Get('weight')
  getWeightLogs(@Request() req: any) {
    return this.progressService.getWeightLogs(req.user.id);
  }

  @ApiOperation({ summary: 'Get weight logs by date range' })
  @ApiResponse({ status: 200, description: 'Return weight logs in date range' })
  @ApiQuery({ name: 'startDate', required: true, type: String, description: 'Start date in ISO format' })
  @ApiQuery({ name: 'endDate', required: true, type: String, description: 'End date in ISO format' })
  @ApiBearerAuth()
  @Get('weight/range')
  getWeightByDateRange(
    @Request() req: any,
    @Query('startDate') startDateString: string,
    @Query('endDate') endDateString: string,
  ) {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);
    return this.progressService.getWeightByDateRange(req.user.id, startDate, endDate);
  }

  @ApiOperation({ summary: 'Get weight log by ID' })
  @ApiResponse({ status: 200, description: 'Return weight log by ID' })
  @ApiResponse({ status: 404, description: 'Weight log not found' })
  @ApiBearerAuth()
  @Get('weight/:id')
  getWeightLog(@Param('id') id: string, @Request() req: any) {
    return this.progressService.getWeightLog(id, req.user.id);
  }

  @ApiOperation({ summary: 'Update weight log' })
  @ApiResponse({ status: 200, description: 'Weight log updated successfully' })
  @ApiResponse({ status: 404, description: 'Weight log not found' })
  @ApiBearerAuth()
  @Patch('weight/:id')
  updateWeightLog(
    @Param('id') id: string,
    @Body() updateWeightLogDto: UpdateWeightLogDto,
    @Request() req: any,
  ) {
    return this.progressService.updateWeightLog(id, req.user.id, updateWeightLogDto);
  }

  @ApiOperation({ summary: 'Delete weight log' })
  @ApiResponse({ status: 200, description: 'Weight log deleted successfully' })
  @ApiResponse({ status: 404, description: 'Weight log not found' })
  @ApiBearerAuth()
  @Delete('weight/:id')
  removeWeightLog(@Param('id') id: string, @Request() req: any) {
    return this.progressService.removeWeightLog(id, req.user.id);
  }
}