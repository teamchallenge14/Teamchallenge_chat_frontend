import { apiClient } from '@/app/api/api';
import type { GuestSchemaValues } from '../schemas';

export const guestAuth = async (login: string) => {
  try {
    const response = await apiClient.post(`/v1/auth/guest`, {
      login,
      firstName: 'Guest',
      lastName: 'User',
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateQuest = async (id: string, userData: Omit<GuestSchemaValues, 'interests'>) => {
  try {
    const response = await apiClient.patch(`/v1/users/${id}`, userData);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log('Error response data:', error.response?.data);
    throw error;
  }
};
