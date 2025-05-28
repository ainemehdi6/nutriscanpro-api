import { Module } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';
import { FoodsModule } from '../foods/foods.module';
import { AiAnalysisModule } from '@/ai-analysis/ai-analysis.module';

@Module({
  imports: [FoodsModule, AiAnalysisModule],
  controllers: [MealsController],
  providers: [MealsService],
  exports: [MealsService],
})
export class MealsModule {}