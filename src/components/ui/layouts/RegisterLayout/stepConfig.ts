import { RegisterStepsEnum } from '@/store/@types';

/*
This types for check PersonalInfo and Interest
persomalInfo and interest is profile
another is form
*/
export enum StepLayoutEnum {
  FORM = 'form',
  PROFILE = 'profile',
}

export interface RegisterStepConfig {
  title: string;
  description?: string;
  layout: StepLayoutEnum;
  showProgress: boolean;
  showBack: boolean;
  prevStep?: RegisterStepsEnum;
  isFinal?: boolean;
  image?: string;
}

export const REGISTER_STEP_ORDER: RegisterStepsEnum[] = [
  RegisterStepsEnum.ENTER_EMAIL,
  RegisterStepsEnum.ENTER_USERNAME,
  RegisterStepsEnum.EMAIL_VERIFICATION,
  RegisterStepsEnum.ENTER_PERSONAL_INFO,
  RegisterStepsEnum.ENTER_INTERESTS,
];

export const REGISTER_STEP_CONFIG: Record<RegisterStepsEnum, RegisterStepConfig> = {
  [RegisterStepsEnum.ENTER_EMAIL]: {
    title: 'Sign Up',
    description: 'Sign up with your email and password to get started',
    layout: StepLayoutEnum.FORM,
    showProgress: true,
    showBack: false,
    image: 'user.svg',
  },

  [RegisterStepsEnum.ENTER_USERNAME]: {
    title: 'Choose a Username',
    description: 'This name will be visible to others in chats',
    layout: StepLayoutEnum.FORM,
    showProgress: true,
    showBack: true,
    prevStep: RegisterStepsEnum.ENTER_EMAIL,
    image: 'user.svg',
  },

  [RegisterStepsEnum.EMAIL_VERIFICATION]: {
    title: 'Verification',
    description: "We've sent a 6-digit verification code to your email",
    layout: StepLayoutEnum.FORM,
    showProgress: true,
    showBack: true,
    prevStep: RegisterStepsEnum.ENTER_USERNAME,
    image: 'user.svg',
  },

  [RegisterStepsEnum.ENTER_PERSONAL_INFO]: {
    title: 'Personal Info',
    layout: StepLayoutEnum.PROFILE,
    showProgress: true,
    showBack: true,
    prevStep: RegisterStepsEnum.EMAIL_VERIFICATION,
  },

  [RegisterStepsEnum.ENTER_INTERESTS]: {
    title: 'Interests',
    description: 'Select your interests',
    layout: StepLayoutEnum.PROFILE,
    showProgress: true,
    showBack: true,
    prevStep: RegisterStepsEnum.ENTER_PERSONAL_INFO,
  },

  [RegisterStepsEnum.EMAIL_EDIT]: {
    title: 'Email Edit',
    description: 'Enter the correct email and we’ll resend the verification',
    layout: StepLayoutEnum.FORM,
    showProgress: false,
    showBack: true,
    prevStep: RegisterStepsEnum.EMAIL_VERIFICATION,
    image: 'user.svg',
  },

  [RegisterStepsEnum.FINALY_STEP]: {
    title: 'Your Profile is Ready!',
    description: 'Your profile is set up. You can start chatting now.',
    layout: StepLayoutEnum.FORM,
    showProgress: false,
    showBack: false,
    isFinal: true,
    image: 'done.svg',
  },
};
