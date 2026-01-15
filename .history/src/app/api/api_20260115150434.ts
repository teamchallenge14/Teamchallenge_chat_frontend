import type { SingUp } from '@/types/SingUp';
import axios from 'axios';

// const BASE__URL = 'https://teamchallenge-chat-backend.onrender.com/';
const BASE__URL = '/api';

export const apiClient = axios.create({
  baseURL: BASE__URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem('accessToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   if (!token) {
//     localStorage.removeItem('accessToken');
//   }

//   return config;
// });

// Function to get interests
export const getInterest = async () => {
  try {
    const response = await apiClient.get('interests');
    return response.data;
  } catch (error) {
    console.log('Error fetching interests:', error);
    throw error;
  }
};

export const singUp = async (formData: SingUp) => {
  try {
    console.log('Sending sign-up data:', formData);
    const response = await apiClient.post('v1/auth', formData);
    return response.data;
  } catch (erorr) {
    console.log('singUp erorr', erorr);
    throw erorr;
  }
};
