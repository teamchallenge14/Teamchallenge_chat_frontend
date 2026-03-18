import { SearchBar } from './SearchBar';

export type User = {
  firstName: string;
  surname: string;
  avatarUrl?: string;
  initials?: string;
};

type LobbyHeaderProps = {
  user: User;
  onNotificationClick?: () => void;
};

export const LobbyHeader = ({ user, onNotificationClick }: LobbyHeaderProps) => {
  return (
    <header className="z-20 px-4 pb-2 pt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {user.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt={`${user.firstName} ${user.surname}'s avatar`}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <div
              aria-label={`${user.firstName} ${user.surname}'s avatar`}
              role="img"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50 text-sm font-semibold text-black"
            >
              {user.initials ?? `${user.firstName[0]}${user.surname[0]}`}
            </div>
          )}
          <div>
            <h1 className="text-base font-bold leading-7">{`${user.firstName} ${user.surname}`}</h1>
            <p className="text-sm text-neutral-500">Welcome back, {user.firstName}!</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onNotificationClick ?? (() => console.log('Navigate to notifications'))}
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white"
          aria-label="Notifications"
        >
          <img src="/img/bell.svg" alt="" aria-hidden="true" className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-600" />
        </button>
      </div>
      <SearchBar />
    </header>
  );
};
