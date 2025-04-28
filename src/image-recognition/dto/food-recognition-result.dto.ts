export class NutritionalInfoDto {
  calories: number;
  proteins: number;
  carbs: number;
  fats: number;
}

export class FoodRecognitionResultDto {
  foodName: string;
  description: string;
  confidence: number;
  nutritionalInfo: NutritionalInfoDto;
  possibleAlternatives?: string[];
}