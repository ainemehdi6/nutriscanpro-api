import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';

export async function createApp() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors();
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Fitness Tracker API')
    .setDescription('API for fitness and nutrition tracking application')
    .setVersion('1.0')
    .addTag('auth', 'Authentication endpoints')
    .addTag('users', 'User management endpoints')
    .addTag('foods', 'Food database endpoints')
    .addTag('meals', 'Meal logging endpoints')
    .addTag('exercises', 'Exercise logging endpoints')
    .addTag('goals', 'Goal tracking endpoints')
    .addTag('progress', 'Weight progress endpoints')
    .addTag('ai-analysis', 'AI-powered food analysis endpoints')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  fs.writeFileSync('./swagger.json', JSON.stringify(document, null, 2));

  await app.init();
  return app.getHttpAdapter().getInstance(); // Express instance
}

// For local development only
if (process.env.NODE_ENV !== 'production') {
  createApp().then(app => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Application is running on: http://localhost:${port}`);
    });
  });
}
