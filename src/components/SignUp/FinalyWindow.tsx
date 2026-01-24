import { Button } from '../ui/button';
import { MainTitle } from '../ui/MainTitle';

export const FinalyWindow = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <div className="flex h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center">
            <MainTitle
              image="img/done.svg"
              title="Your Profile is Ready!"
              description="Your profile is set up. You can start chatting now."
            />
            <Button>Go to home</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
