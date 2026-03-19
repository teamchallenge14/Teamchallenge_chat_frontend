import React from 'react';
import { Header, MainTitle, ProgressBar } from '@/shared/ui';
import { useGuestSetStep, useSignUpSetStep } from '../../store/authStore';
import { useAuthLayoutConfig } from './useAuthLayoutConfig';
import { type FlowType, type StepEnum } from './configs/layoutConfig';
import type { GuestStepsEnum, SignUpStepsEnum } from '../../types/@auth.types';

interface IAuthLayoutProps {
  flow?: FlowType;
  step?: StepEnum;
  variant?: 'login' | 'guestUsername';
  children: React.ReactNode;
}

export const AuthLayout: React.FC<IAuthLayoutProps> = ({ flow, step, variant, children }) => {
  const setRegisterStep = useSignUpSetStep();
  const setGuestStep = useGuestSetStep();

  const { config, progress } = useAuthLayoutConfig(flow, step, variant);

  const handleBack = () => {
    if (config.prevStep) {
      if (flow === 'signup') {
        setRegisterStep(config.prevStep as unknown as SignUpStepsEnum);
      }

      if (flow === 'guest') {
        setGuestStep(config.prevStep as unknown as GuestStepsEnum);
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header
        title={config.title}
        isFinalStep={config.isFinal}
        onBack={config.showBack ? handleBack : undefined}
      />

      {config.showProgress && <ProgressBar value={progress} />}

      {config.layout === 'form' ? (
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <MainTitle
              image={config.image ? `img/${config.image}` : ''}
              title={config.subtitle ?? config.title}
              description={config.description ?? ''}
            />
            {children}
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col">{children}</div>
      )}
    </div>
  );
};
