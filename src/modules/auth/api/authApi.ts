import { apiClient } from '@/app/api/api';

export const getAuthMe = async () => {
  const response = await apiClient.get('/v1/auth/me');
  return response.data;
};
