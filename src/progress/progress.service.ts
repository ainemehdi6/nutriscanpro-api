import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWeightLogDto } from './dto/create-weight-log.dto';
import { UpdateWeightLogDto } from './dto/update-weight-log.dto';

@Injectable()
export class ProgressService {
  constructor(private prisma: PrismaService) {}

  async createWeightLog(userId: string, createWeightLogDto: CreateWeightLogDto) {
    return this.prisma.weightLog.create({
      data: {
        userId,
        weight: createWeightLogDto.weight,
        date: createWeightLogDto.date || new Date(),
      },
    });
  }

  async getWeightLogs(userId: string) {
    return this.prisma.weightLog.findMany({
      where: { userId },
      orderBy: { date: 'asc' },
    });
  }

  async getWeightLog(id: string, userId: string) {
    const weightLog = await this.prisma.weightLog.findUnique({
      where: { id },
    });
    
    if (!weightLog || weightLog.userId !== userId) {
      throw new NotFoundException(`Weight log with ID "${id}" not found`);
    }
    
    return weightLog;
  }

  async updateWeightLog(id: string, userId: string, updateWeightLogDto: UpdateWeightLogDto) {
    // First check if the weight log exists and belongs to the user
    await this.getWeightLog(id, userId);
    
    return this.prisma.weightLog.update({
      where: { id },
      data: updateWeightLogDto,
    });
  }

  async removeWeightLog(id: string, userId: string) {
    // First check if the weight log exists and belongs to the user
    await this.getWeightLog(id, userId);
    
    return this.prisma.weightLog.delete({
      where: { id },
    });
  }

  async getWeightByDateRange(userId: string, startDate: Date, endDate: Date) {
    return this.prisma.weightLog.findMany({
      where: {
        userId,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: { date: 'asc' },
    });
  }
}