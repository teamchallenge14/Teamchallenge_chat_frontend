import { Button } from '@shared/ui';

type RandomChatCardProps = {
  onFilter?: () => void;
};

export const RandomChatCard = ({ onFilter }: RandomChatCardProps) => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold">Random Chat</h2>
        <Button
          variant="outline"
          size="sm"
          className="shadow-primary border-[#E5E5E5] p-2 leading-4 text-[#000000]"
          onClick={onFilter}
          type="button"
        >
          Filters
        </Button>
      </div>

      <div className="shadow-xs mt-3 rounded-lg bg-neutral-950 p-4 shadow-[0_1px_2px_0_#0000001A]">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-[9px] bg-white/20">
            <img
              src="/img/message.svg"
              alt=""
              aria-hidden="true"
              className="h-[15.75px] w-[15.75px]"
            />
          </div>

          <div className="flex-1">
            <p className="text-sm font-bold text-[#FAFAFA]">Random Chat</p>
            <p className="mt-1 text-sm font-normal leading-4 text-neutral-200">
              Meet new people instantly
            </p>
          </div>
        </div>

        <div className="mt-1">
          <Button
            variant="secondary"
            size="lg"
            className="mt-[10px] w-full rounded-lg bg-neutral-50 px-4 py-2 text-sm font-medium leading-5 text-black"
            type="button"
          >
            Start Matching
          </Button>
        </div>
      </div>
    </section>
  );
};
