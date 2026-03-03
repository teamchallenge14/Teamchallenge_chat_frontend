import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { GuestStepEnum } from './@types';

interface InitialGuestState {
  step: GuestStepEnum;
}

interface IGuestActions {
  setStep: (step: GuestStepEnum) => void;
}

const initialRegisterState: InitialGuestState = {
  step: GuestStepEnum.ENTER_USERNAME,
};

interface IRegisterStore extends InitialGuestState, IGuestActions {}

export const registerStore = create<IRegisterStore>()(
  devtools((set) => ({
    ...initialRegisterState,
    setStep: (step: GuestStepEnum) => set({ step }, undefined, 'REGISTER_SET_STEP'),
  })),
);

//Selectors
export const useGuestCurrentStep = () => registerStore((state) => state.step);

//Actions
export const useGuestSetStep = () => registerStore((state) => state.setStep);
