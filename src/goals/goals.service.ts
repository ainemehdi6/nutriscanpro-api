import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';

@Injectable()
export class GoalsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createGoalDto: CreateGoalDto) {
    // Check if there's an active goal already
    const activeGoal = await this.prisma.goal.findFirst({
      where: {
        userId,
        active: true,
      },
    });
    
    // If there's an active goal, deactivate it
    if (activeGoal) {
      await this.prisma.goal.update({
        where: { id: activeGoal.id },
        data: { active: false, endDate: new Date() },
      });
    }
    
    // Create new goal
    return this.prisma.goal.create({
      data: {
        userId,
        ...createGoalDto,
        active: true,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.goal.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string, userId: string) {
    const goal = await this.prisma.goal.findUnique({
      where: { id },
    });
    
    if (!goal || goal.userId !== userId) {
      throw new NotFoundException(`Goal with ID "${id}" not found`);
    }
    
    return goal;
  }

  async getActiveGoal(userId: string) {
    const goal = await this.prisma.goal.findFirst({
      where: {
        userId,
        active: true,
      },
    });
    
    if (!goal) {
      throw new NotFoundException('No active goal found');
    }
    
    return goal;
  }

  async update(id: string, userId: string, updateGoalDto: UpdateGoalDto) {
    // First check if the goal exists and belongs to the user
    await this.findOne(id, userId);
    
    return this.prisma.goal.update({
      where: { id },
      data: updateGoalDto,
    });
  }

  async remove(id: string, userId: string) {
    // First check if the goal exists and belongs to the user
    await this.findOne(id, userId);
    
    return this.prisma.goal.delete({
      where: { id },
    });
  }
}