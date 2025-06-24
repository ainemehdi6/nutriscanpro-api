import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      log: process.env.NODE_ENV === 'development' ? ['info', 'warn', 'error'] : ['error'],
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async cleanDatabase() {
    if (process.env.NODE_ENV === 'production') {
      return;
    }
    
    // Only use this for testing
    // List your Prisma model names here as they appear in your Prisma schema
    const modelKeys = ['user', 'post', 'comment']; // <-- replace with your actual model names

    return Promise.all(
      modelKeys.map((modelKey) => {
        return (this as any)[modelKey].deleteMany();
      })
    );
  }
}