import { Avatar } from '@radix-ui/react-avatar';
import { CreateSheet } from '../components/CreateRoomSheet';
import { InputSearch } from '../components/InputSearch';
import { AvatarImage } from '@/shared/ui/avatar';

export const RoomPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <nav className="relative flex items-center justify-center bg-white py-5 font-semibold">
        <h1 className="text-lg">Messages</h1>
        <CreateSheet />
      </nav>

      <div className="px-4 pb-4 pt-2">
        <InputSearch />
        <main>
          <ul>
            <li className="flex items-start gap-3 py-3">
              <div className="relative w-fit">
                <Avatar>
                  <AvatarImage
                    src="/img/Avatar.svg"
                    alt="User Avatar"
                    className="w-[3.5rem] rounded-full"
                  />
                </Avatar>

                <span className="border-background absolute -bottom-0.5 -right-0 size-4 rounded-full border-2 bg-green-500">
                  <span className="sr-only">Online</span>
                </span>
              </div>
              <div className="flex w-full items-start justify-between border-b border-[#E5E5E5] pb-3 text-base/3">
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-muted-foreground text-sm">Hey, how are you?</p>
                </div>
                <div className="relative flex h-full flex-col items-end justify-between">
                  <div className="flex items-center gap-1 opacity-80">
                    <img src="/img/read_status.svg" alt="read status" />
                    <span className="text-muted-foreground text-xs">2:45 PM</span>
                  </div>
                  <img src="/img/Pin.svg" className="mt-4" alt="pin" />
                </div>
              </div>
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
};
