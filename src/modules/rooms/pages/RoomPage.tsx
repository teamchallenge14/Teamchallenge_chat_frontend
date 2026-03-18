import { InputGroup, InputGroupAddon, InputGroupInput } from '@/shared/ui/input-group';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet';

export const RoomPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <nav className="relative flex items-center justify-center bg-white py-5 font-semibold">
        <h1 className="text-lg">Messages</h1>
        <Sheet>
          <SheetTrigger>
            <img className="absolute bottom-3 right-5 cursor-pointer" src="/img/plus.svg" />
          </SheetTrigger>
          <SheetContent className="w-full bg-[#fafafa] p-0">
            <SheetHeader className="w-full bg-white py-3 pb-5">
              <SheetClose asChild>
                <img
                  src="/img/back.svg"
                  className="absolute left-7 top-7 cursor-pointer"
                  alt="Close"
                />
              </SheetClose>
              <SheetTitle className="text-lg">Create Room</SheetTitle>
            </SheetHeader>
            <SheetDescription className="justify-center">
              Enter the name of the room you want to create
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>

      <div className="px-4 pb-4 pt-2">
        <aside className="mb-4">
          <InputGroup className="focus-within:border-muted gap-3 bg-white shadow-sm">
            <InputGroupInput
              className="placeholder:text-muted-foreground"
              placeholder="Search..."
            />
            <InputGroupAddon>
              <img src="/img/search.svg" alt="Search" />
            </InputGroupAddon>
          </InputGroup>
        </aside>

        <main>
          <ul>
            <li className="flex items-start gap-3 py-3">
              <div>
                <img className="" src="/img/Avatar.svg" alt="Avatar" />
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
