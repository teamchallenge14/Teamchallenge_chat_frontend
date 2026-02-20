import { Input } from '../../ui/Input';

export const SearchBar = () => {
  return (
    <div className="mt-4">
      <div className="relative">
        <img
          src="/img/search.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 opacity-60"
        />
        <Input
          type="search"
          placeholder="Search…"
          className="h-11 w-full rounded-xl bg-white pl-10 pr-3"
        />
      </div>
    </div>
  );
};
