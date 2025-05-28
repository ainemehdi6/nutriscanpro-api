  import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
  import { ConfigService } from '@nestjs/config';
  import { AnalyzeTextDto } from './dto/analyze-text.dto';
  import { CreateFoodDto } from '../foods/dto/create-food.dto';

  interface FoodItem {
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    servingSize: number;
    servingUnit: string;
  }

  export interface NutritionResponse {
    foods: FoodItem[];
    totalNutrition: {
      calories: number;
      protein: number;
      carbs: number;
      fat: number;
    };
    createFoodDtos: CreateFoodDto[];
  }

  @Injectable()
  export class AiAnalysisService {
    private readonly geminiApiKey: string;

    constructor(private readonly configService: ConfigService) {
      this.geminiApiKey = this.configService.get<string>('GEMINI_API_KEY') ?? '';

      if (!this.geminiApiKey) {
        throw new InternalServerErrorException('GEMINI_API_KEY is not defined in environment variables.');
      }
    }

    /**
     * Analyze a food image to extract nutritional information.
     * @param base64Image The image encoded in base64.
     */
    async analyzeImage(base64Image: string): Promise<NutritionResponse> {
      const prompt = `
        Tu es un expert en nutrition. À partir de l'image fournie, identifie les aliments visibles et estime leurs valeurs nutritionnelles approximatives 
        (calories, protéines, glucides, lipides et grammage en g). Réponds avec un objet JSON structuré comme ceci :

        {
          "foods": [
            {
              "name": "Poulet grillé",
              "calories": 165,
              "protein": 31,
              "carbs": 0,
              "fat": 3.6,
              "servingSize": 100,
              "servingUnit": "g"
            }
          ],
          "totalNutrition": {
            "calories": ...,
            "protein": ...,
            "carbs": ...,
            "fat": ...
          }
        }

        Réponds uniquement avec le JSON sans Markdown et sans commentaire.
      `;

      const payload = {
        contents: [
          {
            parts: [
              { text: prompt },
              {
                inline_data: {
                  mime_type: 'image/jpeg',
                  data: base64Image,
                },
              },
            ],
          },
        ],
      };

      const response = await this.callGeminiApi(
        'gemini-2.0-flash',
        payload
      );

      return this.extractJson(response);
    }

    /**
     * Analyze a textual description of a meal to estimate its nutrition data.
     * @param analyzeTextDto Text DTO containing the meal description.
     */
    async analyzeText(analyzeTextDto: AnalyzeTextDto): Promise<NutritionResponse> {
      const prompt = `
        Tu es un nutritionniste expert. Voici une description d’un repas :

        "${analyzeTextDto.text}"

        Estime les informations nutritionnelles  et grammage en g pour chaque ingrédient identifié, avec le format JSON suivant :

        {
          "foods": [
            {
              "name": "Nom de l'aliment",
              "calories": 123,
              "protein": 10,
              "carbs": 15,
              "fat": 5,
              "servingSize": 100,
              "servingUnit": "g"
            }
          ],
          "totalNutrition": {
            "calories": 0,
            "protein": 0,
            "carbs": 0,
            "fat": 0
          }
        }

        Réponds uniquement avec le JSON sans Markdown et sans commentaire.
      `;

      const payload = {
        contents: [
          {
            parts: [
              { text: prompt },
            ],
          },
        ],
      };

      const response = await this.callGeminiApi(
        'gemini-2.0-flash',
        payload
      );

      return this.extractJson(response);
    }

    /**
     * Generic Gemini API caller
     * @param model Model name: gemini-2.0-flash
     * @param body Request body
     */
    private async callGeminiApi(model: string, body: any): Promise<any> {
      const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${this.geminiApiKey}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      console.log(response.json);
      if (!response.ok) {
        throw new BadRequestException(`Gemini API error: ${response.statusText}`);
      }

      return response.json();
    }

    /**
     * Extracts JSON from Gemini API text response and maps foods to CreateFoodDto[].
     * @param result API response body
     */
    private extractJson(result: any): NutritionResponse & { createFoodDtos: CreateFoodDto[] } {
      const textResponse = result?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!textResponse) {
        throw new BadRequestException('Aucune réponse exploitable retournée par l’IA.');
      }

      const cleanedTextResponse = textResponse
        .replace(/```json\s*|```/g, '')
        .trim();

      let parsed: NutritionResponse;
      try {
        parsed = JSON.parse(cleanedTextResponse) as NutritionResponse;
      } catch (error) {
        throw new BadRequestException('Le JSON retourné par Gemini est invalide : ' + cleanedTextResponse);
      }

      const createFoodDtos: CreateFoodDto[] = parsed.foods.map((food) => ({
        name: food.name,
        calories: food.calories,
        protein: food.protein,
        carbs: food.carbs,
        fat: food.fat,
        servingSize: food.servingSize,
        servingUnit: food.servingUnit,
      }));

      return {
        ...parsed,
        createFoodDtos,
      };
    }

  }
