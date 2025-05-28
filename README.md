# Fitness Tracker API

A comprehensive backend API for a fitness and nutrition tracking application, built with NestJS and TypeScript.

## Features

- User authentication with JWT
- Food database with search by name and barcode
- Meal logging with portion control
- Exercise tracking with calorie burn calculations
- Goal setting for calories and macronutrients
- Weight progress tracking
- AI-powered food analysis from images and text descriptions

## Tech Stack

- NestJS with TypeScript
- MySql with Prisma ORM
- JWT authentication
- Swagger API documentation

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Mysql database

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up the environment variables in `.env` file

4. Initialize the database:

```bash
npx prisma migrate dev
```

5. Start the development server:

```bash
npm run start:dev
```

## API Documentation

Once the server is running, you can access the Swagger API documentation at:

```
http://localhost:3000/api/docs
```

## Authentication

The API uses JWT authentication. To access protected endpoints:

1. Register a new user at `/api/auth/register`
2. Login at `/api/auth/login` to get an access token
3. Include the token in the Authorization header as:

```
Authorization: Bearer YOUR_ACCESS_TOKEN
```

## Database Schema

The database schema includes tables for:

- Users
- Foods
- Meals and MealItems
- Exercises
- Goals
- WeightLogs