import { Module } from '@nestjs/common';
import { AiAnalysisService } from './ai-analysis.service';
import { AiAnalysisController } from './ai-analysis.controller';
import { FoodsModule } from '../foods/foods.module';

@Module({
  imports: [FoodsModule],
  controllers: [AiAnalysisController],
  providers: [AiAnalysisService],
  exports: [AiAnalysisService],
})
export class AiAnalysisModule {}