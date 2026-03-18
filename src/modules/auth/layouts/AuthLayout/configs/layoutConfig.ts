import type { SignUpStepsEnum, GuestStepsEnum } from '@/modules/auth/types/@auth.types';

export type StepLayout = 'form' | 'profile';

export type FlowType = 'signup' | 'guest';

export type StepEnum = SignUpStepsEnum | GuestStepsEnum;

export interface LayoutConfig {
  title: string;
  subtitle?: string;
  description?: string;
  layout: StepLayout;
  showProgress?: boolean;
  showBack?: boolean;
  prevStep?: StepEnum;
  isFinal?: boolean;
  image?: string;
}
