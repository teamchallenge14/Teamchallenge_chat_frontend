import { Button } from '../ui/button';
import { MainTitle } from '../ui/MainTitle';

export const Success = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <div className="flex h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <MainTitle
              image="img/done.svg"
              title="Password Reset!"
              description="Your password has been successfully reset, click below to continue your access"
            />
            <Button>Continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
