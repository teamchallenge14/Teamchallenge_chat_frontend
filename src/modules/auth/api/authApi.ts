import { apiClient } from '@/app/api/api';
import type { RegisterValues } from '../schemas/registerSchema';
import type { LoginValues } from '../schemas/loginSchema';

export const getAuthMe = async () => {
  const response = await apiClient.get('/v1/auth/me');
  return response.data;
};

export const singUpAsync = async (formData: RegisterValues) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...dataToSend } = formData;

    console.log('Sending sign-up data:', dataToSend);
    const response = await apiClient.post('/v1/auth', dataToSend);
    console.log('singUp response:', response);
    return response.data;
  } catch (erorr) {
    console.log('singUp erorr', erorr);
    throw erorr;
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

export const logInAsync = async (formData: LoginValues) => {
  try {
    console.log('Sending log-in data', formData);
    const response = await apiClient.post('/v1/auth/login', formData);
    return response.data;
  } catch (error) {
    console.log('LogIn error', error);
    throw error;
  }
};

export const sendResetCodeAsync = async (email: string) => {
  try {
    const response = await apiClient.post('/v1/mail/reset-password/send', { email });
    return response.data;
  } catch (error) {
    console.log('Error sending reset code:', error);
    throw error;
  }
};

export const sendResetCodeConfirmAsync = async (
  email: string,
  code: string,
  newPassword: string,
) => {
  try {
    const response = await apiClient.post('/v1/mail/reset-password/confirm', {
      email,
      code,
      newPassword,
    });
    return response.data;
  } catch (error) {
    console.log('Error sending reset code:', error);
    throw error;
  }
};

export const getInterestAsync = async () => {
  try {
    const response = await apiClient.get('/v1/interests');
    return response.data;
  } catch (error) {
    console.log('Error fetching interests:', error);
    throw error;
  }
};

export const getUserByIdAsync = async (userId: string) => {
  if (!userId) {
    throw new Error('User ID is required');
  }
  try {
    const response = await apiClient.get('/v1/users/{id}', {
      params: {
        id: userId,
      },
    });
    return response.data;
  } catch (error) {
    console.log('Error fetching user by ID:', error);
    throw error;
  }
};

export const updateUserAsync = async (id: string, userData: Partial<RegisterValues>) => {
  try {
    const response = await apiClient.patch(`/v1/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.log('Error updating user:', error);
    throw error;
  }
};

export const setUserInterestsAsync = async (
  id: string,
  payload: { add?: string[]; remove?: string[] },
) => {
  try {
    const response = await apiClient.patch(`/v1/users/${id}/interests`, payload);
    return response.data;
  } catch (error) {
    console.log('Error fetching user interests:', error);
    throw error;
  }
};
