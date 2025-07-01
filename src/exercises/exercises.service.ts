import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

const EXERCISEDB_API_URL = 'https://exercisedb.p.rapidapi.com/exercises';
const EXERCISEDB_API_KEY = process.env.EXERCISEDB_API_KEY;

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

  async getExampleExercises(muscle?: string, equipment?: string, limit: number = 50, offset: number = 0) {
    let url = EXERCISEDB_API_URL;
    let query = [];
    if (limit) query.push(`limit=${limit}`);
    if (offset) query.push(`offset=${offset}`);
    if (query.length) url += `?${query.join('&')}`;

    const headers = {
      'x-rapidapi-key': EXERCISEDB_API_KEY || '',
    };

    try {
      const res = await fetch(url, { headers });
      const data = await res.json();
      let exercises = Array.isArray(data) ? data : [];
      if (muscle) {
        exercises = exercises.filter(ex => ex.bodyPart && ex.bodyPart.toLowerCase() === muscle.toLowerCase());
      }
      if (equipment) {
        exercises = exercises.filter(ex => ex.equipment && ex.equipment.toLowerCase() === equipment.toLowerCase());
      }
      return exercises.map((ex: any) => ({
        name: ex.name,
        description: ex.instructions || [],
        image: ex.gifUrl || '',
        video: '',
        muscle: ex.bodyPart || '',
        equipment: ex.equipment || '',
      }));
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}