import { Button } from '@/shared/ui';
import { RegisterStepsEnum } from '../../types/@auth.types';
import { AuthLayout } from '../../layouts';

export const FinalyWindow = () => {
  return (
    <AuthLayout step={RegisterStepsEnum.FINALY_STEP}>
      <Button>Go to home</Button>
    </AuthLayout>
  );
};
