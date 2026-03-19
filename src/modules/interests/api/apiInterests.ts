import { apiClient } from '@/app/api/api';

export const getInterestAsync = async () => {
  const response = await apiClient.get('/v1/interests');
  return response.data;
};
