import { Injectable } from '@nestjs/common';
import { FoodEntity } from '../food/entities/food.entity';
import { UserEntity } from '../user/entities/user.entity';
import { MealEntity } from '../meal/entities/meal.entity';

@Injectable()
export class DatabaseService {
  private readonly foods: Map<string, FoodEntity> = new Map();
  private readonly users: Map<string, UserEntity> = new Map();
  private readonly meals: Map<string, MealEntity> = new Map();

  // Food methods
  getAllFoods(): FoodEntity[] {
    return Array.from(this.foods.values());
  }

  getFoodById(id: string): FoodEntity | undefined {
    return this.foods.get(id);
  }

  createFood(food: FoodEntity): FoodEntity {
    this.foods.set(food.id, food);
    return food;
  }

  updateFood(id: string, food: Partial<FoodEntity>): FoodEntity | undefined {
    const existingFood = this.foods.get(id);
    if (!existingFood) {
      return undefined;
    }
    
    const updatedFood = { ...existingFood, ...food, id };
    this.foods.set(id, updatedFood);
    return updatedFood;
  }

  deleteFood(id: string): boolean {
    return this.foods.delete(id);
  }

  searchFood(query: string): FoodEntity[] {
    query = query.toLowerCase();
    return this.getAllFoods().filter(
      food => 
        food.name.toLowerCase().includes(query) || 
        food.barcode === query
    );
  }

  // User methods
  getAllUsers(): UserEntity[] {
    return Array.from(this.users.values());
  }

  getUserById(id: string): UserEntity | undefined {
    return this.users.get(id);
  }

  createUser(user: UserEntity): UserEntity {
    this.users.set(user.id, user);
    return user;
  }

  updateUser(id: string, user: Partial<UserEntity>): UserEntity | undefined {
    const existingUser = this.users.get(id);
    if (!existingUser) {
      return undefined;
    }
    
    const updatedUser = { ...existingUser, ...user, id };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  deleteUser(id: string): boolean {
    return this.users.delete(id);
  }

  // Meal methods
  getAllMeals(): MealEntity[] {
    return Array.from(this.meals.values());
  }

  getMealById(id: string): MealEntity | undefined {
    return this.meals.get(id);
  }

  createMeal(meal: MealEntity): MealEntity {
    this.meals.set(meal.id, meal);
    return meal;
  }

  updateMeal(id: string, meal: Partial<MealEntity>): MealEntity | undefined {
    const existingMeal = this.meals.get(id);
    if (!existingMeal) {
      return undefined;
    }
    
    const updatedMeal = { ...existingMeal, ...meal, id };
    this.meals.set(id, updatedMeal);
    return updatedMeal;
  }

  deleteMeal(id: string): boolean {
    return this.meals.delete(id);
  }

  getMealsByUserId(userId: string): MealEntity[] {
    return this.getAllMeals().filter(meal => meal.userId === userId);
  }

  // Initialize some sample data
  initializeData() {
    // Sample foods
    const sampleFoods: FoodEntity[] = [
      {
        id: '1',
        name: 'Apple',
        barcode: '12345678',
        calories: 95,
        proteins: 0.5,
        carbs: 25,
        fats: 0.3,
        servingSize: 100,
        servingUnit: 'g',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '2',
        name: 'Chicken Breast',
        barcode: '87654321',
        calories: 165,
        proteins: 31,
        carbs: 0,
        fats: 3.6,
        servingSize: 100,
        servingUnit: 'g',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '3',
        name: 'Brown Rice',
        barcode: '11223344',
        calories: 112,
        proteins: 2.6,
        carbs: 24,
        fats: 0.9,
        servingSize: 100,
        servingUnit: 'g',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];

    sampleFoods.forEach(food => this.foods.set(food.id, food));

    // Sample users
    const sampleUsers: UserEntity[] = [
      {
        id: '1',
        username: 'john_doe',
        email: 'john@example.com',
        password: '$2b$10$Eq8AqexQQLl5Ud6mFbOOLO6RQbsQ0cy.TlCkYsWULxFeZRHcaPlzW', // hashed 'password123'
        weightInKg: 80,
        heightInCm: 180,
        dailyCalorieGoal: 2000,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];

    sampleUsers.forEach(user => this.users.set(user.id, user));

    // No sample meals initially - they'll be created by users
  }

  constructor() {
    this.initializeData();
  }
}
