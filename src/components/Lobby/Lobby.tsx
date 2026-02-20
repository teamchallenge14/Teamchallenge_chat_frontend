import { LobbyHeader } from './components/LobbyHeader';
import { RandomChatCard } from './components/RandomChatCard';
import { RoomsList } from './components/RoomsList';
import { BottomNav } from './components/BottomNav';

export const Lobby = () => {
  return (
    // Use dynamic viewport height for better mobile behavior.
    <div className="relative flex min-h-dvh w-full flex-col bg-[#FAFAFA]">
      <LobbyHeader />

      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto px-4 pb-[88px]">
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
