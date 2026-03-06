import { create } from 'zustand';
import type { User } from '../types/@auth.types';
import { devtools } from 'zustand/middleware';
import { getAuthMe } from '../api/authApi';

interface IInitialAuthState {
  user: User | null;
  isLoading: boolean;
  isInitialized: boolean;
}

const initialAuthState: IInitialAuthState = {
  user: null,
  isLoading: false,
  isInitialized: false,
};

interface IAuthActions {
  fetchUser: () => Promise<void>;
  logout: () => Promise<void>;
}

interface IAuthStore extends IInitialAuthState, IAuthActions {}

export const authStore = create<IAuthStore>()(
  devtools((set, get) => ({
    ...initialAuthState,
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
  })),
);

//Actions
export const useAuthFetchUser = () => authStore((state) => state.fetchUser);
export const useAuthLogout = () => authStore((state) => state.logout);
