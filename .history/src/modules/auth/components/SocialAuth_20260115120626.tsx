import { Button } from '@/components/ui/button'; // Путь к вашим Shadcn компонентам
import type { OAuthProvider } from '../types';

export const SocialAuth = () => {
  const handleOAuthLogin = (provider: OAuthProvider) => {
    const baseUrl = import.meta.env.VITE_API_URL;
    const authUrl = `${baseUrl}/auth/${provider}`;
    window.location.href = authUrl;
  };

  return (
    <div className="mx-auto w-full max-w-md px-4 pb-8">
      <div className='mb-[32px] flex items-center gap-3 before:block before:h-[1px] before:flex-1 before:bg-[#E5E5E5] before:content-[""] after:block after:h-[1px] after:flex-1 after:bg-[#E5E5E5] after:content-[""]'>
        <span className="whitespace-nowrap text-sm text-gray-500">OR CONTINUE WITH</span>
      </div>

      <div className="flex justify-between gap-3">
        {/* Google */}
        <Button
          type="button"
          variant="outline"
          className="h-12 flex-1"
          onClick={() => handleOAuthLogin('google')}
        >
          <img src="/img/google.svg" alt="Google" className="h-5 w-5" />
        </Button>

        {/* Facebook */}
        <Button
          variant="outline"
          className="h-12 flex-1"
          onClick={() => handleOAuthLogin('facebook')}
        >
          <img src="/img/fec.svg" alt="Facebook" className="h-5 w-5" />
        </Button>

        {/* GitHub */}
        <Button
          variant="outline"
          className="h-12 flex-1"
          onClick={() => handleOAuthLogin('github')}
        >
          <img src="/img/github.svg" alt="GitHub" className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
