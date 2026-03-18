import { Input } from '../../ui/Input';

export const SearchBar = () => {
  return (
    <div className="mt-4">
      {' '}
      <div className="relative">
        {' '}
        {/* SVG icon */}{' '}
        <img
          src="/img/search.svg"
          alt="search icon"
          className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"
        />{' '}
        <Input
          placeholder="Search…"
          className="shadow-primary h-11 w-full rounded-md bg-white pl-10 pr-3 leading-5 tracking-normal placeholder:text-[#737373] placeholder:opacity-100"
        />{' '}
      </div>{' '}
    </div>
  );
};
