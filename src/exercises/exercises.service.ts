import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Injectable()
export class ExercisesService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createExerciseDto: CreateExerciseDto) {
    return this.prisma.exercise.create({
      data: {
        userId,
        ...createExerciseDto,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.exercise.findMany({
      where: { userId },
    });
  }

  async findByDate(userId: string, date: Date) {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    
    return this.prisma.exercise.findMany({
      where: {
        userId,
        date: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });
  }

  async findOne(id: string, userId: string) {
    const exercise = await this.prisma.exercise.findUnique({
      where: { id },
    });
    
    if (!exercise || exercise.userId !== userId) {
      throw new NotFoundException(`Exercise with ID "${id}" not found`);
    }
    
    return exercise;
  }

  async update(id: string, userId: string, updateExerciseDto: UpdateExerciseDto) {
    // First check if the exercise exists and belongs to the user
    await this.findOne(id, userId);
    
    return this.prisma.exercise.update({
      where: { id },
      data: updateExerciseDto,
    });
  }

  async remove(id: string, userId: string) {
    // First check if the exercise exists and belongs to the user
    await this.findOne(id, userId);
    
    return this.prisma.exercise.delete({
      where: { id },
    });
  }

  async getCaloriesByDate(userId: string, date: Date) {
    const exercises = await this.findByDate(userId, date);
    
    const totalCalories = exercises.reduce(
      (sum, exercise) => sum + exercise.caloriesBurned,
      0,
    );
    
    return { date, totalCalories };
  }
}