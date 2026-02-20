import React, { useMemo } from 'react';
import { type RegisterStepsEnum } from '@/store/@types';
import { useRegisterSetStep } from '@/store/register-store';
import { REGISTER_STEP_CONFIG, REGISTER_STEP_ORDER, StepLayoutEnum } from './stepConfig';
import { Header } from '../../Header';
import { MainTitle } from '../../MainTitle';
import { ProgressBar } from '../../ProgressBar';

interface IRegisterLayoutProps {
  step: RegisterStepsEnum;
  children: React.ReactNode;
}

export const RegisterLayout: React.FC<IRegisterLayoutProps> = ({ step, children }) => {
  const setRegisterStep = useRegisterSetStep();
  const config = REGISTER_STEP_CONFIG[step];

  /**
   * Автоматический расчёт прогресса
   */
  const progress = useMemo(() => {
    if (!config.showProgress) return 0;

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
              title={config.title}
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
