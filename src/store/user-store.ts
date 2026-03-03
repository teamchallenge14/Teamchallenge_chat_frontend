import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface InitialUserState {
  userID: string | null;
}

interface UserActions {
  setUserID: (userID: string | null) => void;
}

const initialRegisterState: InitialUserState = {
  userID: null,
};

interface IRegisterStore extends InitialUserState, UserActions {}

export const userStore = create<IRegisterStore>()(
  devtools((set) => ({
    ...initialRegisterState,
    setUserID: (userID: string) => set({ userID }, undefined, 'REGISTER_SET_USER_ID'),
  })),
);

//Selectors
export const useUserID = () => userStore((state) => state.userID);

//Actions
export const useSetUserID = () => userStore((state) => state.setUserID);
