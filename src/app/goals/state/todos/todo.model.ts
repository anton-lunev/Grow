import { Timestamp } from '../../../shared/utils/timestamp';

export interface Todo {
  id: string;
  title: string;
  goalId: string;
  done: boolean;
  index: number;
  created: Timestamp;
  modified: Timestamp;
}

/**
 * A factory function that creates Todos
 */
export function createTodo(data: Partial<Todo>): Todo {
  return {
    id: '',
    title: '',
    goalId: '',
    done: false,
    index: 0,
    created: Timestamp.now(),
    modified: Timestamp.now(),
    ...data
  };
}
