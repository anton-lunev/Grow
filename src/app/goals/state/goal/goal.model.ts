import { Timestamp } from '../../../shared/utils/timestamp';

export interface Progress {
  overall: number;
  done: number;
}

export interface Goal {
  id: string;
  title: string;
  user: string;
  description: string;
  image: string;
  private: boolean;
  progress: Progress;
  created: Timestamp;
  modified: Timestamp;
  done: Boolean;
}

export function createGoal(data: Partial<Goal>): Goal {
  return {
    id: '',
    title: '',
    user: '',
    description: '',
    image: '',
    private: false,
    progress: { overall: 0, done: 0 },
    created: Timestamp.now(),
    modified: Timestamp.now(),
    done: false,
    ...data
  };
}
