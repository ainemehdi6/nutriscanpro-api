import {
  Controller,
  Post,
  Body,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiConsumes,
  ApiBody,
} from '@nestjs/swagger';
import { AiAnalysisService, NutritionResponse } from './ai-analysis.service';
import { AnalyzeImageDto } from './dto/analyze-image.dto';
import { AnalyzeTextDto } from './dto/analyze-text.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('ai-analysis')
@Controller('ai-analysis')
@UseGuards(JwtAuthGuard)
export class AiAnalysisController {
  constructor(private readonly aiAnalysisService: AiAnalysisService) {}

  @ApiOperation({ summary: 'Analyze food from image' })
  @ApiResponse({ status: 201, description: 'Image analyzed successfully' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
        context: {
          type: 'string',
          example: 'This is a dinner plate with chicken and vegetables',
        },
      },
    },
  })
  
  @ApiBearerAuth()
  @Post('image')
  @UseInterceptors(FileInterceptor('file'))
  async analyzeImage(
    @UploadedFile() file: Express.Multer.File,
    @Body() analyzeImageDto: AnalyzeImageDto,
  ): Promise<NutritionResponse> {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    const base64Image = file.buffer.toString('base64');

    return this.aiAnalysisService.analyzeImage(base64Image);
  }

  @ApiOperation({ summary: 'Analyze food from text description' })
  @ApiResponse({ status: 201, description: 'Text analyzed successfully' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiBearerAuth()
  @Post('text')
  analyzeText(@Body() analyzeTextDto: AnalyzeTextDto) {
    return this.aiAnalysisService.analyzeText(analyzeTextDto);
  }
}
