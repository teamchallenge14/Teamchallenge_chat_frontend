import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from '@/shared/ui/sheet';
import { ScrollArea } from '@shared/ui/scroll-area';
import { CreateRoomForm } from './CreateRoomForm';

export const CreateSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <img className="absolute bottom-3 right-5 cursor-pointer" src="/img/plus.svg" />
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col gap-0 bg-[#fafafa] p-0 pt-0">
        <SheetHeader className="w-full bg-white py-3 pb-5">
          <SheetClose asChild>
            <img src="/img/back.svg" className="absolute left-7 top-7 cursor-pointer" alt="Close" />
          </SheetClose>
          <SheetTitle className="text-center text-lg">Create Room</SheetTitle>
        </SheetHeader>
        <ScrollArea className="min-h-0">
          <CreateRoomForm />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
