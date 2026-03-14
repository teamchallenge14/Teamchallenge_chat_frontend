import { apiClient } from '@/app/api/api';

export const apiResetPassword = {
  send: async (email: string) => {
    const response = await apiClient.post('/v1/mail/reset-password/send', { email });
    return response.data;
  },
  confirm: async (email: string, code: string, newPassword: string) => {
    const response = await apiClient.post('/v1/mail/reset-password/confirm', {
      email,
      code,
      newPassword,
    });
    return response.data;
  },
};
