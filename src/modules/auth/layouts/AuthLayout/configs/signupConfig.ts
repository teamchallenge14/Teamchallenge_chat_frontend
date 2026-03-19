import { SignUpStepsEnum } from '@/modules/auth/types/@auth.types';
import type { LayoutConfig } from './layoutConfig';

export const SIGNUP_STEP_ORDER: SignUpStepsEnum[] = [
  SignUpStepsEnum.ENTER_EMAIL,
  SignUpStepsEnum.ENTER_USERNAME,
  SignUpStepsEnum.EMAIL_VERIFICATION,
  SignUpStepsEnum.ENTER_PERSONAL_INFO,
  SignUpStepsEnum.ENTER_INTERESTS,
];

export const SIGNUP_STEP_CONFIG: Record<SignUpStepsEnum, LayoutConfig> = {
  [SignUpStepsEnum.ENTER_EMAIL]: {
    title: 'Sign Up',
    description: 'Sign up with your email and password to get started',
    layout: 'form',
    showProgress: true,
    image: 'user.svg',
  },

  [SignUpStepsEnum.ENTER_USERNAME]: {
    title: 'Choose a Username',
    description: 'This name will be visible to others in chats',
    layout: 'form',
    showProgress: true,
    showBack: true,
    prevStep: SignUpStepsEnum.ENTER_EMAIL,
    image: 'user.svg',
  },

  [SignUpStepsEnum.EMAIL_VERIFICATION]: {
    title: 'Verification',
    description: "We've sent a 6-digit verification code to your email",
    layout: 'form',
    showProgress: true,
    showBack: true,
    prevStep: SignUpStepsEnum.ENTER_USERNAME,
    image: 'user.svg',
  },

  [SignUpStepsEnum.ENTER_PERSONAL_INFO]: {
    title: 'Personal Info',
    layout: 'profile',
    showProgress: true,
    showBack: true,
    prevStep: SignUpStepsEnum.EMAIL_VERIFICATION,
  },

  [SignUpStepsEnum.ENTER_INTERESTS]: {
    title: 'Interests',
    description: 'Select your interests',
    layout: 'profile',
    showProgress: true,
    showBack: true,
    prevStep: SignUpStepsEnum.ENTER_PERSONAL_INFO,
  },

  [SignUpStepsEnum.EMAIL_EDIT]: {
    title: 'Email Edit',
    description: 'Enter the correct email and we’ll resend the verification',
    layout: 'form',
    showBack: true,
    prevStep: SignUpStepsEnum.EMAIL_VERIFICATION,
    image: 'user.svg',
  },

  [SignUpStepsEnum.FINALY_STEP]: {
    title: 'Your Profile is Ready!',
    description: 'Your profile is set up. You can start chatting now.',
    layout: 'form',
    isFinal: true,
    image: 'done.svg',
  },
};
