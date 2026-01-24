export const SocialAuth = () => {
  return (
    <div className="mx-auto w-full max-w-md px-4 pb-8">
      <div className='mb-[32px] flex items-center gap-3 before:block before:h-[1px] before:flex-1 before:bg-[#E5E5E5] before:content-[""] after:block after:h-[1px] after:flex-1 after:bg-[#E5E5E5] after:content-[""]'>
        <span className="whitespace-nowrap text-sm text-gray-500">OR CONTINUE WITH</span>
      </div>

      <div className="flex justify-between gap-3">
        <a
          href="/v1/auth/google"
          className="flex h-12 flex-1 items-center justify-center rounded-md border border-[#E5E5E5] bg-white shadow-sm transition-colors hover:bg-gray-50"
        >
          <img src="/img/google.svg" alt="Google" className="h-5 w-5" />
        </a>

        <a
          href="/v1/auth/facebook"
          className="flex h-12 flex-1 items-center justify-center rounded-md border border-[#E5E5E5] bg-white shadow-sm transition-colors hover:bg-gray-50"
        >
          <img src="/img/fec.svg" alt="Facebook" className="h-5 w-5" />
        </a>

        <a
          href="/v1/auth/github"
          className="flex h-12 flex-1 items-center justify-center rounded-md border border-[#E5E5E5] bg-white shadow-sm transition-colors hover:bg-gray-50"
        >
          <img src="/img/github.svg" alt="GitHub" className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};
