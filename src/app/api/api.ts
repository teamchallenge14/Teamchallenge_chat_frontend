import type { LoginValues, RegisterValues } from '@/features/auth';
import type { RegisterInitialValues } from '@/features/auth/model/register-schema';
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

export const singUp = async (formData: RegisterInitialValues) => {
  try {
    console.log('Sending sign-up data:', formData);
    const response = await apiClient.post('v1/auth', formData);
    return response.data;
  } catch (erorr) {
    console.log('singUp erorr', erorr);
    throw erorr;
  }
};

export const verifyEmail = async (email: string) => {
  try {
    const response = await apiClient.post('v1/mail/sendConfirm', { email });
    return response.data;
  } catch (error) {
    console.log('Email verification error', error);
    throw error;
  }
};

export const logIn = async (formData: LoginValues) => {
  try {
    console.log('Sending log-in data', formData);
    const response = await apiClient.post('v1/auth/login', formData);
    return response.data;
  } catch (error) {
    console.log('LogIn error', error);
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
    const response = await apiClient.get('v1/users/{id}', { params: { id: userId } });
    return response.data;
  } catch (error) {
    console.log('Error fetching user by ID:', error);
    throw error;
  }
};

export const updateUser = async (id: string, userData: RegisterValues) => {
  try {
    const response = await apiClient.patch(`v1/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.log('Error updating user:', error);
    throw error;
  }
};

export const setUserInterests = async (id: string, interestIds: string[]) => {
  try {
    const response = await apiClient.put(`v1/${id}/interests`, {
      interestIds: interestIds,
    });
    return response.data;
  } catch (error) {
    console.log('Error fetching user interests:', error);
    throw error;
  }
};
