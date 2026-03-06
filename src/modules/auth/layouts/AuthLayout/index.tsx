import React, { useMemo } from 'react';
import {
  REGISTER_STEP_CONFIG,
  REGISTER_STEP_ORDER,
  STATIC_AUTH_CONFIG,
  StepLayoutEnum,
} from './stepConfig';
import { Header, MainTitle, ProgressBar } from '@/shared/ui';
import { type RegisterStepsEnum } from '../../types/@auth.types';
import { useRegisterSetStep } from '../../store/registerStore';

interface IAuthLayoutProps {
  step?: RegisterStepsEnum;
  variant?: 'login';
  children: React.ReactNode;
}

export const AuthLayout: React.FC<IAuthLayoutProps> = ({ step, variant, children }) => {
  const setRegisterStep = useRegisterSetStep();
  const config = useMemo(() => {
    if (step) {
      return REGISTER_STEP_CONFIG[step];
    }
    if (variant === 'login') {
      return STATIC_AUTH_CONFIG.login;
    }

    // Default empty config
    return {
      title: '',
      layout: StepLayoutEnum.FORM,
      showProgress: false,
      showBack: false,
    };
  }, [step, variant]);

  //Automatic progress calculation
  const progress = useMemo(() => {
    if (!step || !config.showProgress) return 0;
    const index = REGISTER_STEP_ORDER.indexOf(step);
    if (index === -1) return 0;
    return Math.round(((index + 1) / REGISTER_STEP_ORDER.length) * 100);
  }, [step, config.showProgress]);

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header
        title={config.title}
        isFinalStep={config.isFinal}
        onBack={
          config.showBack && config.prevStep
            ? () => setRegisterStep(config.prevStep as RegisterStepsEnum)
            : undefined
        }
      />

      {config.showProgress && <ProgressBar value={progress} />}

      {config.layout === StepLayoutEnum.FORM ? (
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <MainTitle
              image={config.image ? `img/${config.image}` : ''}
              title={config.subtitle || config.title}
              description={config.description || ''}
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
