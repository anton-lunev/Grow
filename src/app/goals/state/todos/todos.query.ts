import { Injectable } from '@angular/core';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';
import { Todo } from './todo.model';
import { TodosState, TodosStore } from './todos.store';

@Injectable({ providedIn: 'root' })
@QueryConfig({
  sortBy: 'index',
  sortByOrder: Order.DESC
})
export class TodosQuery extends QueryEntity<TodosState, Todo> {
  constructor(protected store: TodosStore) {
    super(store);
  }

  selectGoalTodos(goalId) {
    return this.selectAll({ filterBy: todo => todo.goalId === goalId });
  }

  getGoalTodosCount(goalId) {
    return this.getCount(todo => todo.goalId === goalId);
  }

  getGoalTodos(goalId) {
    return this.getAll({ filterBy: todo => todo.goalId === goalId });
  }
}
