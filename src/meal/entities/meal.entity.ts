import { MealType } from '../dto/meal.dto';

export interface MealFoodItem {
  foodId: string;
  quantity: number;
  servingSize: string;
}

export interface MealEntity {
  id: string;
  userId: string;
  name: string;
  date: string;
  mealType: MealType;
  foodItems: MealFoodItem[];
  createdAt: string;
  updatedAt: string;
}
