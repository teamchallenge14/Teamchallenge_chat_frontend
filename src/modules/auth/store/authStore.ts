import { create } from 'zustand';
import { SignUpStepsEnum, GuestStepsEnum, type User } from '@/modules/auth/types/@auth.types';
import { devtools } from 'zustand/middleware';
import { getAuthMe } from '@/modules/auth/api/authApi';

interface IInitialAuthState {
  user: User | null;
  isLoading: boolean;
  isInitialized: boolean;
  singUpStep: SignUpStepsEnum;
  guestStep: GuestStepsEnum;
  userID: string | null;
}

const initialAuthState: IInitialAuthState = {
  user: null,
  isLoading: false,
  isInitialized: false,
  singUpStep: SignUpStepsEnum.ENTER_EMAIL,
  guestStep: GuestStepsEnum.GUEST_USERNAME,
  userID: null,
};

interface IAuthActions {
  fetchUser: () => Promise<void>;
  logout: () => Promise<void>;
  setSignUpStep: (step: SignUpStepsEnum) => void;
  setUserID: (userID: string) => void;
  setGuestStep: (step: GuestStepsEnum) => void;
  resetUserID: () => void;
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
    setSignUpStep: (singUpStep: SignUpStepsEnum) =>
      set({ singUpStep }, undefined, 'AUTH_SET_SIGNUP_STEP'),
    setUserID: (userID: string) => set({ userID }, undefined, 'AUTH_SET_USER_ID'),
    setGuestStep: (guestStep: GuestStepsEnum) =>
      set({ guestStep }, undefined, 'AUTH_GUEST_SET_STEP'),
    resetUserID: () => set({ userID: null }, undefined, 'AUTH_RESET_USER_ID'),
  })),
);

//Selectors
export const useSignUpCurrentStep = () => authStore((state) => state.singUpStep);
export const useAuthUserID = () => authStore((state) => state.userID);
export const useGuestCurrentStep = () => authStore((state) => state.guestStep);

//Actions
export const useAuthFetchUser = () => authStore((state) => state.fetchUser);
export const useAuthLogout = () => authStore((state) => state.logout);
export const useSignUpSetStep = () => authStore((state) => state.setSignUpStep);
export const useAuthSetUserID = () => authStore((state) => state.setUserID);
export const useGuestSetStep = () => authStore((state) => state.setGuestStep);
export const useAuthResetUserID = () => authStore((state) => state.resetUserID);
