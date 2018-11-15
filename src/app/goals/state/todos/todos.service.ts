import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { createTodo, Todo } from './todo.model';
import { TodosStore } from './todos.store';

@Injectable({ providedIn: 'root' })
export class TodosService {
  constructor(private todosStore: TodosStore, private afs: AngularFirestore) {}

  private getTodosCollection(goalId: string): AngularFirestoreCollection {
    return this.afs
      .collection('goals')
      .doc(goalId)
      .collection('todos');
  }

  getTodos(goalId): Observable<Todo[]> {
    return this.getTodosCollection(goalId)
      .valueChanges()
      .pipe(tap((todos: Todo[]) => this.todosStore.set(todos)));
  }

  addTodo(goalId: string, title: string) {
    const id = this.afs.createId();
    const todo = createTodo({ id, goalId, title });
    this.getTodosCollection(goalId)
      .doc(id)
      .set(todo);
  }

  updateTodo(goalId: string, todo: Todo) {
    this.getTodosCollection(goalId)
      .doc(todo.id)
      .set(createTodo(todo));
  }

  deleteTodo(goalId: string, todo: Todo) {
    this.getTodosCollection(goalId)
      .doc(todo.id)
      .delete();
  }
}
