import { create } from 'zustand';
import { getAuthMe } from '@/app/api/api';
import type { User } from '../types/index';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isInitialized: boolean;
  fetchUser: () => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isLoading: false,
  isInitialized: false,

  fetchUser: async () => {
    if (get().isLoading) return;

    set({ isLoading: true });
    try {
      const data = await getAuthMe();
      console.log('Данные пользователя получены и ставятся в стор:', data);
      set({ user: data, isLoading: false, isInitialized: true });
    } catch {
      set({ user: null, isLoading: false, isInitialized: true });
    }
  },

  logout: () => {
    // Here add an API call to delete cookies on the server
    set({ user: null, isLoading: false });
  },
}));
