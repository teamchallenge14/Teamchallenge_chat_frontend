import axios from "axios";

const BASE__URL = 'https://teamchallenge-chat-backend.onrender.com/';

const apiClient = axios.create({
  baseURL: BASE__URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getInterest = async () => {
  try {
    const response = await apiClient.get('/interests');
    return response.data;
  } catch (error) {
    console.log('Error fetching interests:', error);
    throw error;
  }
};
