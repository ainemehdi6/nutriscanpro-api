import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FoodsModule } from './foods/foods.module';
import { MealsModule } from './meals/meals.module';
import { ExercisesModule } from './exercises/exercises.module';
import { GoalsModule } from './goals/goals.module';
import { ProgressModule } from './progress/progress.module';
import { AiAnalysisModule } from './ai-analysis/ai-analysis.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    FoodsModule,
    MealsModule,
    ExercisesModule,
    GoalsModule,
    ProgressModule,
    AiAnalysisModule,
  ],
})
export class AppModule {}