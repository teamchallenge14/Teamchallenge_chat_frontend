import { SearchBar } from './SearchBar';

export const LobbyHeader = () => {
  return (
    <header className="z-20 bg-white px-4 pb-2 pt-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
            JD
          </div>

          <div>
            <h1 className="text-base font-semibold leading-tight">John Doe</h1>
            <p className="text-sm text-neutral-500">Welcome back, John!</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => console.log('Go to unread messages')}
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white"
          aria-label="Notifications"
        >
          {/* Bell icon */}
          <img src="/img/bell.svg" alt="" aria-hidden="true" className="h-5 w-5" />

          {/* Red unread badge */}
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-600" />
        </button>
      </div>
      <SearchBar />
    </header>
  );
};
