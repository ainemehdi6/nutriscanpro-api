export class ApiResponseDto<T> {
  success: boolean;
  statusCode: number;
  data: T;
  timestamp: string;
  error?: {
    message: string;
    code?: string;
    details?: any;
  };
}
