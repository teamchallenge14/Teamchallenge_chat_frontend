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
