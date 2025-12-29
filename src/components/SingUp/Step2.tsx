import { Button } from '../ui/button';
import { Header } from '../ui/Header';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';

interface Step1Props {
  onNext: () => void;
}

export const Step2: React.FC<Step1Props> = ({ onNext }) => {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Header title="Email Verification " />
      <div className="flex-1 flex flex-col justify-center overflow-hidden">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center w-full max-w-md">
            <img src="img/user.svg" alt="icon" className="icon mb-5" />

            <div className="text-center mb-8">
              <h1 className="text-[30px] font-bold leading-[40px] mb-2">Check your Email</h1>
              <h2 className="font-normal text-[14px] text-gray-600">
                We’ve sent a 6-digit verification code to your email
              </h2>
            </div>

            <form className="w-full flex flex-col gap-[16px]">
              <div>
                <Label htmlFor="code">Verification code</Label>
                <Input id="code" type="email" placeholder="123456" />
              </div>
              <Button variant="default" onClick={onNext}>Verify</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
