import { Button } from '@shared/ui';

export type Room = {
  image?: string;
  id: string;
  title: string;
  description: string;
  tags: string[];
  timeAgo: string;
  onlineText: string;
  isPrivate?: boolean;
};

export const RoomItem = ({ room }: { room: Room }) => {
  return (
    <article className="bg-white">
      <div className="flex items-center gap-3">
        <div className="relative h-14 w-14 shrink-0">
          {room.image ? (
            <img
              src={room.image}
              alt={`${room.title} room image`}
              className="h-full w-full rounded-2xl object-cover"
            />
          ) : (
            <div className="h-full w-full rounded-2xl bg-neutral-100" aria-hidden="true" />
          )}

          {room.isPrivate && (
            <img
              src="/img/lock.svg"
              alt="Private room"
              className="absolute -right-1 -top-1 h-5 w-5"
            />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex justify-between">
            <h3 className="truncate text-sm font-medium leading-5 text-black">{room.title}</h3>

            <div className="shrink-0 text-xs leading-4 text-neutral-400">{room.timeAgo}</div>
          </div>

          <p className="mt-1 line-clamp-2 max-w-[90%] text-sm leading-5 text-neutral-500">
            {room.description}
          </p>

          <div className="mt-3 flex items-start justify-between">
            <div className="flex max-w-[70%] flex-wrap gap-1">
              {room.tags.map((tag) => (
                <Button key={tag} variant="tag" size="tag">
                  {tag}
                </Button>
              ))}
            </div>

            <div
              className="flex shrink-0 items-center gap-1 text-xs text-neutral-600"
              aria-label={`${room.onlineText} participants online`}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              <span>{room.onlineText}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
