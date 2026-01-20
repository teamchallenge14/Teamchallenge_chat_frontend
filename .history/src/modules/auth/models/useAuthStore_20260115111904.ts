import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Описываем, что именно мы будем хранить
interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
      logout: () => set({ token: null }),
    }),
    {
      name: 'auth-storage', // Имя ключа в LocalStorage (в браузере)
    }
  )
);

