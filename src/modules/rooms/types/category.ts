import type { UUID } from 'crypto';

export interface ICategory {
  id: UUID;
  name: string;
  category: string;
}
