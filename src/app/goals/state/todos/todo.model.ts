export interface Todo {
  id: string;
  title: string;
  goalId: string;
  done: boolean;
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
    ...data
  };
}
