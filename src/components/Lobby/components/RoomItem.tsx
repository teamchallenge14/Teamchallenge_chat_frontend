export type Room = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  timeAgo: string;
  onlineText: string;
};

export const RoomItem = ({ room }: { room: Room }) => {
  return (
    <article className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold">{room.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-neutral-500">{room.description}</p>
        </div>

        <div className="shrink-0 text-xs text-neutral-500">{room.timeAgo}</div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          {room.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span>{room.onlineText}</span>
        </div>
      </div>
    </article>
  );
};
