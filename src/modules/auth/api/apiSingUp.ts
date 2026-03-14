import { apiClient } from '@/app/api/api';
import type { RegisterValues } from '../schemas';

export const singUpAsync = async (formData: RegisterValues) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...dataToSend } = formData;

    console.log('Sending sign-up data:', dataToSend);
    const response = await apiClient.post('/v1/auth', dataToSend);
    console.log('singUp response:', response);
    return response.data;
  } catch (error) {
    console.log('singUp error', error);
    throw error;
  }
};

export const verifyEmailAsync = async (email: string) => {
  try {
    const response = await apiClient.post('/v1/mail/confirm/send', { email });
    return response.data;
  } catch (error) {
    console.log('Email verification error', error);
    throw error;
  }
};

export const confirmVerifyAsync = async (email: string, code: string) => {
  try {
    const response = await apiClient.post('/v1/mail/confirm', { email, code });
    return response.data;
  } catch (erorr) {
    console.log('Confirm verification error', erorr);
    throw erorr;
  }
};
