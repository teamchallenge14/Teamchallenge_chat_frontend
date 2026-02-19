import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { RegisterStepsEnum } from './@types';

interface IInitialRegisterState {
  step: RegisterStepsEnum;
  userID: string | null;
}

interface IRegisterActions {
  setStep: (step: RegisterStepsEnum) => void;
  setUserID: (userID: string) => void;
}

const initialRegisterState: IInitialRegisterState = {
  step: RegisterStepsEnum.ENTER_EMAIL,
  userID: null,
};

interface IRegisterStore extends IInitialRegisterState, IRegisterActions {}

export const registerStore = create<IRegisterStore>()(
  devtools((set) => ({
    ...initialRegisterState,
    setStep: (step: RegisterStepsEnum) => set({ step }, undefined, 'REGISTER_SET_STEP'),
    setUserID: (userID: string) => set({ userID }, undefined, 'REGISTER_SET_USER_ID'),
  })),
);

//Selectors
export const useRegisterCurrentStep = () => registerStore((state) => state.step);
export const useRegisterUserID = () => registerStore((state) => state.userID);

//Actions
export const useRegisterSetStep = () => registerStore((state) => state.setStep);
export const useRegisterSetUserID = () => registerStore((state) => state.setUserID);
