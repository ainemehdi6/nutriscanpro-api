import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Apply global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  
  // Enable CORS
  app.enableCors();
  
  // Set global prefix
  app.setGlobalPrefix('api');
  
  // Swagger documentation setup
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

    // Save the document to a JSON file
    fs.writeFileSync('./swagger.json', JSON.stringify(document, null, 2));

  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();