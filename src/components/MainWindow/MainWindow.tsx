import { Button } from '../ui/button';
export const MainWindow = () => {
  return (
    <section className="flex flex-col item-center justify-center h-screen mx-4">
      <div className="flex flex-col items-center justify-center flex-1">
        <img src="img/icon.svg" alt="icon" className="icon" />

        <div>
          <h1 className="text-base font-bold leading-[40px] mt-[20px] mb-[8px] ml-0 text-center">
            ChatApp
          </h1>
          <h2 className="mt-0 mb-0 ml-0 font-normal text-[14px]">
            Connect, chat, and discover new friends
          </h2>
        </div>
        <div className="flex flex-col gap-3 mt-[8px] gap-[8px] w-full">
          <Button variant="default">Sign Up</Button>
          <Button variant="secondary">Log In</Button>
          <Button variant="ghost">Guest Entry</Button>
        </div>

        <p className="text-[12px] font-medium leading-[100%] text-[#A3A3A3] mt-[14px] text-center">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>

      <div className="mb-[22px]">
        <div className='before:content-[""] before:block before:flex-1 before:h-[1px] before:bg-[#E5E5E5] after:content-[""] after:block after:flex-1 after:h-[1px] after:bg-[#E5E5E5] flex items-center gap-3 mb-[32px]'>
          <span className="whitespace-nowrap text-sm text-gray-500">OR CONTINUE WITH</span>
        </div>
        <div className="flex gap-14px justify-between">
          <Button variant="media">
            <img src="/img/google.svg" alt="Google" />
          </Button>

          <Button variant="media">
            <img src="/img/fec.svg" alt="Facebook" />
          </Button>

          <Button variant="media">
            <img src="/img/apple.svg" alt="Apple" />
          </Button>
        </div>
      </div>
    </section>
  );
};
