import { apiClient } from '@/app/api/api';
import type { LoginValues } from '@/modules/auth/schemas';

export const logInAsync = async (formData: LoginValues) => {
  console.log('Sending log-in data', formData);
  const response = await apiClient.post('/v1/auth/login', formData);
  return response.data;
};
