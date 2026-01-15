import { Button } from '../ui/button';

export const FinalyWindow = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <div className="flex h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <img src="img/done.svg" alt="icon" className="icon mb-5" />

            <div className="mb-8 text-center">
              <h1 className="mb-2 text-[30px] font-bold leading-[40px]">Your Profile is Ready!</h1>
              <h2 className="text-[14px] font-normal text-gray-600">
                Your profile is set up. You can start chatting now.
              </h2>
            </div>
            <Button>Go to home</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
