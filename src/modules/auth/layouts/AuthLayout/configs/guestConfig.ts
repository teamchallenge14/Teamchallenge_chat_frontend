import { GuestStepsEnum } from '@/modules/auth/types/@auth.types';
import type { LayoutConfig } from './layoutConfig';

export const GUEST_STEP_ORDER: GuestStepsEnum[] = [
  GuestStepsEnum.GUEST_USERNAME,
  GuestStepsEnum.GUEST_INFO,
  GuestStepsEnum.GUEST_INTERESTS,
];

export const GUEST_STEP_CONFIG: Record<GuestStepsEnum, LayoutConfig> = {
  [GuestStepsEnum.GUEST_USERNAME]: {
    title: 'Choose Username',
    description: 'Enter username to continue as guest',
    layout: 'form',
    showProgress: true,
    image: 'user.svg',
  },

  [GuestStepsEnum.GUEST_INFO]: {
    title: 'Complete Profile',
    image: 'user.svg',
    layout: 'profile',
    showProgress: true,
    showBack: true,
    prevStep: GuestStepsEnum.GUEST_USERNAME,
  },

  [GuestStepsEnum.GUEST_INTERESTS]: {
    title: 'Select Interests',
    description: 'Choose topics you like',
    layout: 'profile',
    showProgress: true,
    showBack: true,
    prevStep: GuestStepsEnum.GUEST_INFO,
  },
};
