import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';

interface Step1Props {
  onNext: () => void;
}

export const Step2: React.FC<Step1Props> = ({ onNext }) => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header title="Email Verification " />
      <div className="flex flex-1 flex-col justify-center overflow-hidden">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <img src="img/user.svg" alt="icon" className="icon mb-5" />

            <div className="mb-8 text-center">
              <h1 className="mb-2 text-[30px] font-bold leading-[40px]">Check your Email</h1>
              <h2 className="text-[14px] font-normal text-gray-600">
                We’ve sent a 6-digit verification code to your email
              </h2>
            </div>

            <form className="flex w-full flex-col gap-[16px]">
              <div>
                <Label htmlFor="code">Verification code</Label>
                <Input id="code" type="email" placeholder="123456" />
              </div>
              <Button variant="default" onClick={onNext}>
                Verify
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
