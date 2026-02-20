import { RoomItem, type Room } from './RoomItem';
import { Button } from '../../ui/button';

const mockRooms: Room[] = [
  {
    id: '1',
    title: 'Tech Talk',
    description: 'Discuss frontend, backend, and tooling.',
    tags: ['Tech', 'AI'],
    timeAgo: '12m ago',
    onlineText: '156/740',
  },
  {
    id: '2',
    title: 'Design & UI',
    description: 'Share UI ideas and get feedback.',
    tags: ['Design', 'UI'],
    timeAgo: '5m ago',
    onlineText: '64/210',
  },
  {
    id: '3',
    title: 'Language Exchange',
    description: 'Practice English with friendly people.',
    tags: ['English', 'Chat'],
    timeAgo: '1m ago',
    onlineText: '23/90',
  },
];

export const RoomsList = ({ rooms = mockRooms }: { rooms?: Room[] }) => {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-semibold">All Rooms</h2>

        <div className="flex gap-2">
          <Button variant="secondary" className="h-9 w-auto px-3">
            Sort
          </Button>
          <Button variant="secondary" className="h-9 w-auto px-3">
            Filters
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {rooms.map((room) => (
          <RoomItem key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
};
