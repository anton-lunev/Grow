import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Progress } from '../goal/goal.model';
import { createTodo, Todo } from './todo.model';
import { TodosQuery } from './todos.query';
import { TodosStore } from './todos.store';

@Injectable({ providedIn: 'root' })
export class TodosService {
  constructor(private todosStore: TodosStore, private todosQuery: TodosQuery, private afs: AngularFirestore) {}

  private getGoalDocument(goalId: string): AngularFirestoreDocument {
    return this.afs.collection('goals').doc(goalId);
  }

  private getTodosCollection(goalId: string): AngularFirestoreCollection {
    return this.getGoalDocument(goalId).collection('todos');
  }

  private getProgress(goalId): Progress {
    const todos = this.todosQuery.getGoalTodos(goalId);
    const done = todos.filter(todo => todo.done).length;
    return { overall: todos.length, done };
  }

  getTodos(goalId): Observable<Todo[]> {
    return this.getGoalDocument(goalId)
      .collection('todos', ref => ref.orderBy('index', 'desc'))
      .valueChanges()
      .pipe(tap((todos: Todo[]) => this.todosStore.set(todos)));
  }

  /**
   * Adds new item to collection with index that equals collection length.
   */
  addTodo(goalId: string, title: string) {
    const progress = this.getProgress(goalId);
    const id = this.afs.createId();
    const todo = createTodo({ id, goalId, title, index: progress.overall });
    progress.overall++;

    const batch = this.afs.firestore.batch();
    batch.set(this.getTodosCollection(goalId).doc(id).ref, todo);
    this.updateGoalProgress(batch, goalId, progress);
    batch.commit();
  }

  updateTodo(goalId: string, todo: Todo) {
    const batch = this.afs.firestore.batch();
    batch.set(this.getTodosCollection(goalId).doc(todo.id).ref, createTodo(todo));

    const progress = this.getProgress(goalId);
    todo.done ? progress.done++ : progress.done--;
    this.updateGoalProgress(batch, goalId, progress);
    batch.commit();
  }

  /**
   * Removes item from collection and updates elements indexes(only when index should be shifted).
   */
  deleteTodo(goalId: string, todo: Todo) {
    const todos = this.todosQuery
      .getGoalTodos(goalId)
      .filter(item => item.id !== todo.id)
      .reverse();
    const todoCollection = this.getTodosCollection(goalId);
    const batch = this.afs.firestore.batch();

    batch.delete(todoCollection.doc(todo.id).ref);
    todos.forEach((item, index) => {
      if (item.index !== index) {
        batch.update(todoCollection.doc(item.id).ref, { index });
      }
    });

    const progress = this.getProgress(goalId);
    progress.overall--;
    if (todo.done) {
      progress.done--;
    }
    this.updateGoalProgress(batch, goalId, progress);
    batch.commit();
  }

  private updateGoalProgress(batch: firestore.WriteBatch, goalId: string, progress: Progress) {
    batch.update(this.getGoalDocument(goalId).ref, { progress });
  }

  reorderTodos(todos: Todo[]) {}
}
