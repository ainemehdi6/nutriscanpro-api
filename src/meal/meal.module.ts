import { Module } from '@nestjs/common';
import { MealController } from './meal.controller';
import { MealService } from './meal.service';
import { FoodModule } from '../food/food.module';

@Module({
  imports: [FoodModule],
  controllers: [MealController],
  providers: [MealService],
  exports: [MealService],
})
export class MealModule {}
