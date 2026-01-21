import type { LoginValues, RegisterValues } from '@/features/auth';
import type { RegisterInitialValues } from '@/features/auth/model/register-schema';
import axios from 'axios';

const BASE__URL = 'https://teamchallenge-chat-backend.onrender.com/v1';

export const apiClient = axios.create({
  baseURL: BASE__URL,
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

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await axios.get('/auth/refresh', { withCredentials: true });
        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error('Refresh token expired or invalid');
        // window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export const singUp = async (formData: RegisterInitialValues) => {
  try {
    console.log('Sending sign-up data:', formData);
    const response = await apiClient.post('auth', formData);
    return response.data;
  } catch (erorr) {
    console.log('singUp erorr', erorr);
    throw erorr;
  }
};

export const verifyEmail = async (email: string) => {
  try {
    const response = await apiClient.post('mail/sendConfirm', { email });
    return response.data;
  } catch (error) {
    console.log('Email verification error', error);
    throw error;
  }
};

export const logIn = async (formData: LoginValues) => {
  try {
    console.log('Sending log-in data', formData);
    const response = await apiClient.post('auth/login', formData);
    return response.data;
  } catch (error) {
    console.log('LogIn error', error);
    throw error;
  }
};

export const getAuthMe = async () => {
  try {
    const response = await apiClient.get('auth/me');
    return response.data;
  } catch (error) {
    console.log('Error fetching current user:', error);
    throw error;
  }
};

export const getInterest = async () => {
  try {
    const response = await apiClient.get('interests');
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
    const response = await apiClient.get(`users/${userId}`);
    return response.data;
  } catch (error) {
    console.log('Error fetching user by ID:', error);
    throw error;
  }
};

export const updateUser = async (id: string, userData: RegisterValues) => {
  try {
    const response = await apiClient.patch(`users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.log('Error updating user:', error);
    throw error;
  }
};

export const setUserInterests = async (id: string, interestIds: string[]) => {
  try {
    const response = await apiClient.put(`${id}/interests`, {
      interestIds: interestIds,
    });
    return response.data;
  } catch (error) {
    console.log('Error fetching user interests:', error);
    throw error;
  }
};
