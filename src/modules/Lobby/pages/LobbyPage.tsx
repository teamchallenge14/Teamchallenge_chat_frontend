import { LobbyHeader, type User } from '../components/LobbyHeader';
import { RandomChatCard } from '../components/RandomChatCard';
import { RoomsList } from '../components/RoomsList';
import { BottomNav } from '../components/BottomNav';

const mockUsers: User[] = [
  {
    firstName: 'John',
    surname: 'Doe',
    avatarUrl: '/img/avatar.png',
    initials: 'JD',
  },
];

export const LobbyPage = ({ users }: { users?: User[] }) => {
  const user = users?.[0] ?? mockUsers[0];

  return (
    // Use dynamic viewport height for better mobile behavior.
    <div className="relative flex h-dvh w-full flex-col">
      <LobbyHeader user={user} />

      {/* Scrollable content area */}
      <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-[88px]">
        <div className="mt-4">
          <RandomChatCard />
        </div>

        <div className="mt-6">
          <RoomsList />
        </div>
      </div>

      <BottomNav />
    </div>
  );
};
