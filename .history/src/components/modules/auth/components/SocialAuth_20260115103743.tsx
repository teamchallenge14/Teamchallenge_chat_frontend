// src/modules/auth/components/SocialAuth.tsx
import { Button } from "@/components/ui/button";
import { AUTH_ROUTES } from "@/shared/constants/env";

export const SocialAuth = () => {
  const handleLogin = (url: string) => {
    // Просто перенаправляем на бэкенд
    window.location.href = url;
  };

  return (
    <div className="mx-auto w-full max-w-md px-4 pb-8">
      <div className='mb-[32px] flex items-center gap-3 before:h-[1px] before:flex-1 before:bg-border after:h-[1px] after:flex-1 after:bg-border'>
        <span className="whitespace-nowrap text-sm text-muted-foreground uppercase">
          Or continue with
        </span>
      </div>

      <div className="flex justify-between gap-3">
        <Button variant="outline" className="flex-1" onClick={() => handleLogin(AUTH_ROUTES.GOOGLE)}>
          <img src="/img/google.svg" alt="Google" className="w-5 h-5" />
        </Button>

        <Button variant="outline" className="flex-1" onClick={() => handleLogin(AUTH_ROUTES.FACEBOOK)}>
          <img src="/img/fec.svg" alt="Facebook" className="w-5 h-5" />
        </Button>

        <Button variant="outline" className="flex-1" onClick={() => handleLogin(AUTH_ROUTES.GITHUB)}>
          <img src="/img/github.svg" alt="GitHub" className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};