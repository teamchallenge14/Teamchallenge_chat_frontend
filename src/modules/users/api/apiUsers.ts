import { apiClient } from '@/app/api/api';
import type { RegisterValues } from '@/modules/auth/schemas';

export const apiUsers = {
  getUserById: async (userId: string) => {
    if (!userId) {
      throw new Error('User ID is required');
    }
    const response = await apiClient.get('/v1/users/{id}', {
      params: {
        id: userId,
      },
    });
    return response.data;
  },
  update: async (id: string, userData: Partial<RegisterValues>) => {
    const response = await apiClient.patch(`/v1/users/${id}`, userData);
    return response.data;
  },
  userInterests: async (id: string, payload: { add?: string[]; remove?: string[] }) => {
    const response = await apiClient.patch(`/v1/users/${id}/interests`, payload);
    return response.data;
  },
};
