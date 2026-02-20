import { RegisterStepsEnum } from '@/store/@types';
import { Button } from '../ui/button';
import { RegisterLayout } from '../ui/layouts';

export const FinalyWindow = () => {
  return (
    <RegisterLayout step={RegisterStepsEnum.FINALY_STEP}>
      <Button>Go to home</Button>
    </RegisterLayout>
  );
};
