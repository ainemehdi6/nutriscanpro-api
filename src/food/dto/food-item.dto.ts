export class NutritionalValuesDto {
  calories: number;
  proteins: number;
  carbs: number;
  fats: number;
}

export class FoodItemDto {
  id: string;
  name: string;
  barcode?: string;
  nutritionalValues: NutritionalValuesDto;
  servingSize: number;
  servingUnit: string;
}
