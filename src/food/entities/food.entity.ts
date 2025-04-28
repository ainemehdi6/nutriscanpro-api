export interface FoodEntity {
  id: string;
  name: string;
  barcode?: string;
  calories: number;
  proteins: number;
  carbs: number;
  fats: number;
  servingSize: number;
  servingUnit: string;
  createdAt: string;
  updatedAt: string;
}
