import * as Progress from '@radix-ui/react-progress';
import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';

interface Step3Props {
  onNext: () => void;
}

export const Step3: React.FC<Step3Props> = ({ onNext }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header title="Email Verification " />
      <Progress.Root
        className="relative h-[8px] w-full overflow-hidden bg-gray-200 rounded-full"
        value={66}
      >
        <Progress.Indicator
          className="h-full bg-black transition-transform"
          style={{ transform: 'translateX(-85%)' }}
        />
      </Progress.Root>
      <div className="flex-1 flex flex-col justify-center overflow-hidden">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center w-full max-w-md">
            <img src="img/user.svg" alt="icon" className="icon mb-5" />
            <div className="text-center mb-8">
              <h1 className="text-[30px] font-bold leading-[40px] mb-2">Choose a Username</h1>
              <h2 className="font-normal text-[14px] text-gray-600">
                This name will be visible to others in chats
              </h2>
            </div>
            <form className="w-full flex flex-col gap-[16px]">
              <div>
                <Label htmlFor="username">Username *</Label>
                <Input id="username" type="text" placeholder="Bob" />
              </div>
            </form>
            <Button variant="default" className="mt-[16px]" type="button" onClick={onNext}>
              Verify
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
