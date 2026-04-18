import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { GuestStepsEnum } from '../../types/@auth.types';

interface InitialGuestState {
  step: GuestStepsEnum;
}

interface IGuestActions {
  setStep: (step: GuestStepsEnum) => void;
}

const initialRegisterState: InitialGuestState = {
  step: GuestStepsEnum.GUEST_USERNAME,
};

interface IRegisterStore extends InitialGuestState, IGuestActions {}

export const registerStore = create<IRegisterStore>()(
  devtools((set) => ({
    ...initialRegisterState,
    setStep: (step: GuestStepsEnum) => set({ step }, undefined, 'REGISTER_SET_STEP'),
  })),
);
