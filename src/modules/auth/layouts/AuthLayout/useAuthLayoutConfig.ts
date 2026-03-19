import {
  SIGNUP_STEP_CONFIG,
  SIGNUP_STEP_ORDER,
  GUEST_STEP_CONFIG,
  GUEST_STEP_ORDER,
} from './configs';

import { STATIC_AUTH_CONFIG } from './configs/staticConfig';
import { type LayoutConfig, type FlowType, type StepEnum } from './configs/layoutConfig';
import type { GuestStepsEnum, SignUpStepsEnum } from '../../types/@auth.types';

interface IReturnType {
  config: LayoutConfig;
  progress: number;
}

export const useAuthLayoutConfig = (
  flow?: FlowType,
  step?: StepEnum,
  variant?: 'login' | 'guestUsername',
): IReturnType => {
  if (variant) {
    return {
      config: STATIC_AUTH_CONFIG[variant],
      progress: 0,
    };
  }

  if (!flow || !step) {
    return { config: { title: '', layout: 'form' }, progress: 0 };
  }

  if (flow === 'signup') {
    const config = SIGNUP_STEP_CONFIG[step];
    const index = SIGNUP_STEP_ORDER.indexOf(step as unknown as SignUpStepsEnum);

    const progress =
      config?.showProgress && index !== -1
        ? Math.round(((index + 1) / SIGNUP_STEP_ORDER.length) * 100)
        : 0;

    return { config, progress };
  }

  if (flow === 'guest') {
    const config = GUEST_STEP_CONFIG[step as unknown as GuestStepsEnum];
    const index = GUEST_STEP_ORDER.indexOf(step as unknown as GuestStepsEnum);

    const progress =
      config?.showProgress && index !== -1
        ? Math.round(((index + 1) / GUEST_STEP_ORDER.length) * 100)
        : 0;

    return { config, progress };
  }

  return { config: { title: '', layout: 'form' }, progress: 0 };
};
