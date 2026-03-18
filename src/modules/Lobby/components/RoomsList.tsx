import { RoomItem } from './RoomItem';
import type { Room } from './RoomItem';
import { Button } from '@shared/ui';

export type { Room } from './RoomItem';

const mockRooms: Room[] = [
  {
    id: '1',
    title: 'Tech Talk',
    description: 'AI and the future of development',
    tags: ['Tech', 'AI'],
    timeAgo: '12m ago',
    onlineText: '156/740',
  },
  {
    id: '2',
    title: 'Music Lovers Hub',
    description:
      'A space to discuss the latest album drops, share first impressions, favorite tracks, and hot takes. Discover new music, talk about trends, and connect with people who love staying up to date with fresh releases. 🎧🎵',
    tags: ['Music', 'Pop culture'],
    timeAgo: '5m ago',
    onlineText: '89/456',
  },
  {
    id: '3',
    title: 'Study Group',
    description: 'This room doesn’t have a description yet',
    tags: ['Education'],
    timeAgo: '12m ago',
    onlineText: '12/16',
    isPrivate: true,
  },
  {
    id: '4',
    title: 'Anime Discussion',
    description: 'Latest episode reactions and theories',
    tags: ['Anime', 'Entertainment'],
    timeAgo: '12m ago',
    onlineText: '156/740',
  },
  {
    id: '5',
    title: 'Tech Talk',
    description: 'AI and the future of development',
    tags: ['Tech', 'AI'],
    timeAgo: '12m ago',
    onlineText: '156/740',
  },
  {
    id: '6',
    title: 'Music Lovers Hub',
    description:
      'A space to discuss the latest album drops, share first impressions, favorite tracks, and hot takes. Discover new music, talk about trends, and connect with people who love staying up to date with fresh releases. 🎧🎵',
    tags: ['Music', 'Pop culture'],
    timeAgo: '5m ago',
    onlineText: '89/456',
  },
  {
    id: '7',
    title: 'Study Group',
    description: 'This room doesn’t have a description yet',
    tags: ['Education'],
    timeAgo: '12m ago',
    onlineText: '12/16',
    isPrivate: true,
  },
  {
    id: '8',
    title: 'Anime Discussion',
    description: 'Latest episode reactions and theories',
    tags: ['Anime', 'Entertainment'],
    timeAgo: '12m ago',
    onlineText: '156/740',
  },
  {
    id: '9',
    title: 'Tech Talk',
    description: 'AI and the future of development',
    tags: ['Tech', 'AI'],
    timeAgo: '12m ago',
    onlineText: '156/740',
  },
  {
    id: '10',
    title: 'Music Lovers Hub',
    description:
      'A space to discuss the latest album drops, share first impressions, favorite tracks, and hot takes. Discover new music, talk about trends, and connect with people who love staying up to date with fresh releases. 🎧🎵',
    tags: ['Music', 'Pop culture'],
    timeAgo: '5m ago',
    onlineText: '89/456',
  },
  {
    id: '11',
    title: 'Study Group',
    description: 'This room doesn’t have a description yet',
    tags: ['Education'],
    timeAgo: '12m ago',
    onlineText: '12/16',
    isPrivate: true,
  },
  {
    id: '12',
    title: 'Anime Discussion',
    description: 'Latest episode reactions and theories',
    tags: ['Anime', 'Entertainment'],
    timeAgo: '12m ago',
    onlineText: '156/740',
  },
];

export const defaultRooms: Room[] = mockRooms;

type RoomsListProps = {
  rooms?: Room[];
  onSort?: () => void;
  onFilter?: () => void;
};

export const RoomsList = ({ rooms = defaultRooms, onSort, onFilter }: RoomsListProps) => {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-semibold">All Rooms</h2>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="shadow-primary border-[#E5E5E5] p-2 leading-4 text-[#000000]"
            onClick={onSort}
            type="button"
          >
            Sort
          </Button>
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
      </div>

      <div className="flex flex-col gap-3">
        {rooms.map((room) => (
          <RoomItem key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
};
