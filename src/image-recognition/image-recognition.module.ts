import { Module } from '@nestjs/common';
import { ImageRecognitionService } from './image-recognition.service';
import { ImageRecognitionController } from './image-recognition.controller';
import { FoodModule } from '../food/food.module';
import { MealModule } from '../meal/meal.module';

@Module({
  imports: [FoodModule, MealModule],
  controllers: [ImageRecognitionController],
  providers: [ImageRecognitionService],
  exports: [ImageRecognitionService],
})
export class ImageRecognitionModule {}