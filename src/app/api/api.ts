import type { LoginValues, RegisterValues } from '@/features/auth';
import type { RegisterInitialValues } from '@/features/auth/model/register-schema';
import axios from 'axios';

export const apiClient = axios.create({
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
    console.log('Sending sign-up data:', formData);
    const response = await apiClient.post('/v1/auth', formData);
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
    const response = await apiClient.get('/interests');
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

export const setUserInterests = async (id: string, interestIds: string[]) => {
  try {
    const response = await apiClient.put(`/v1/users/${id}/interests`, {
      interestIds: interestIds,
    });
    return response.data;
  } catch (error) {
    console.log('Error fetching user interests:', error);
    throw error;
  }
};
