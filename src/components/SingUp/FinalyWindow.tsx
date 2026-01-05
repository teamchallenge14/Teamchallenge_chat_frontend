import { Button } from '../ui/button';

export const FinalyWindow = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex flex-col h-screen">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center w-full max-w-md">
            <img src="img/done.svg" alt="icon" className="icon mb-5" />

            <div className="text-center mb-8">
              <h1 className="text-[30px] font-bold leading-[40px] mb-2">Your Profile is Ready!</h1>
              <h2 className="font-normal text-[14px] text-gray-600">
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
