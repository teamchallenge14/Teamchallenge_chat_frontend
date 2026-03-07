import React from 'react';
import { Button } from '@/shared/ui';
import { SignUpStepsEnum } from '../../types/@auth.types';
import { AuthLayout } from '../../layouts';

export const FinalyWindow: React.FC = () => {
  return (
    <AuthLayout flow={'signup'} step={SignUpStepsEnum.FINALY_STEP}>
      <Button>Go to home</Button>
    </AuthLayout>
  );
};
