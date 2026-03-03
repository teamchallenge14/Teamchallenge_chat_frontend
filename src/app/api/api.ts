import type { LoginValues, RegisterValues } from '@/features/auth';
import type { QuestValues } from '@/features/auth/model/quest-schema';
import type { RegisterInitialValues } from '@/features/auth/model/register-schema';
import { API_URL } from '@/shared/constants/env';
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: API_URL || '/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
// Interceptor for handling rotten tokens
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Если ошибка 401 и это НЕ запрос на refresh (чтобы не было рекурсии)
    if (
      error.response?.status === 401 &&
      !originalRequest.url.includes('/v1/auth/refresh') &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        // Добавляем /v1/, так как прокси ожидает его
        await axios.get('/v1/auth/refresh', { withCredentials: true });
        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error('Refresh token expired or invalid');
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export const getAuthMe = async () => {
  const response = await apiClient.get('/v1/auth/me');
  return response.data;
};

export const singUp = async (formData: RegisterInitialValues) => {
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

export const verifyEmail = async (email: string) => {
  try {
    const response = await apiClient.post('/v1/mail/confirm/send', { email });
    return response.data;
  } catch (error) {
    console.log('Email verification error', error);
    throw error;
  }
};

export const confirmVerify = async (email: string, code: string) => {
  try {
    const response = await apiClient.post('/v1/mail/confirm', { email, code });
    return response.data;
  } catch (erorr) {
    console.log('Confirm verification error', erorr);
    throw erorr;
  }
};

export const logIn = async (formData: LoginValues) => {
  try {
    console.log('Sending log-in data', formData);
    const response = await apiClient.post('/v1/auth/login', formData);
    return response.data;
  } catch (error) {
    console.log('LogIn error', error);
    throw error;
  }
};

export const sendResetCode = async (email: string) => {
  try {
    const response = await apiClient.post('/v1/mail/reset-password/send', { email });
    return response.data;
  } catch (error) {
    console.log('Error sending reset code:', error);
    throw error;
  }
};

export const sendResetCodeConfirm = async (email: string, code: string, newPassword: string) => {
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

export const getInterest = async () => {
  try {
    const response = await apiClient.get('/v1/interests');
    return response.data;
  } catch (error) {
    console.log('Error fetching interests:', error);
    throw error;
  }
};

export const getUserById = async (userId: string) => {
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

export const updateUser = async (id: string, userData: RegisterValues) => {
  try {
    const response = await apiClient.patch(`/v1/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.log('Error updating user:', error);
    throw error;
  }
};

export const setUserInterests = async (
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

export const guestAuth = async (login: string) => {
  try {
    const responce = await apiClient.post(`/v1/auth/guest`, {
      login,
      firstName: 'Guest',
      lastName: 'User',
    });
    return responce.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateQuest = async (id: string, userData: QuestValues) => {
  try {
    const response = await apiClient.patch(`/v1/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.log('Error updating user:', error);
    throw error;
  }
};
