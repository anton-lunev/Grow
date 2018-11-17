import { Timestamp } from '../../../shared/utils/timestamp';

export interface Goal {
  id: string;
  title: string;
  user: string;
  description: string;
  image: string;
  progress: number;
  created: Timestamp;
  modified: Timestamp;
}

export function createGoal(data: Partial<Goal>): Goal {
  return {
    id: '',
    title: '',
    user: '',
    description: '',
    image: '',
    progress: 0,
    created: Timestamp.now(),
    modified: Timestamp.now(),
    ...data
  };
}
