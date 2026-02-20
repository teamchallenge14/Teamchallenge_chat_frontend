import { Button } from '../../ui/button';

export const RandomChatCard = () => {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-semibold">Random Chat</h2>
        <Button variant="secondary" className="h-9 w-auto px-3">
          Filters
        </Button>
      </div>

      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
            🎲
          </div>

          <div className="flex-1">
            <p className="font-semibold leading-tight">Match with someone new</p>
            <p className="mt-1 text-sm text-neutral-500">Start a random chat with filters.</p>
          </div>
        </div>

        <div className="mt-4">
          <Button variant="default">Start Matching</Button>
        </div>
      </div>
    </section>
  );
};
