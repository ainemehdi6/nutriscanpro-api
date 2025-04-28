export interface UserEntity {
  id: string;
  username: string;
  email: string;
  password: string;
  weightInKg?: number;
  heightInCm?: number;
  dailyCalorieGoal?: number;
  createdAt: string;
  updatedAt: string;
}
