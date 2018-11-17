import { Timestamp } from '../../../shared/utils/timestamp';

export interface Todo {
  id: string;
  index: number;
  title: string;
  goalId: string;
  done: boolean;
  created: Timestamp;
  modified: Timestamp;
}

/**
 * A factory function that creates Todos
 */
export function createTodo(data: Partial<Todo>): Todo {
  return {
    id: '',
    index: 0,
    title: '',
    goalId: '',
    done: false,
    created: Timestamp.now(),
    modified: Timestamp.now(),
    ...data
  };
}
