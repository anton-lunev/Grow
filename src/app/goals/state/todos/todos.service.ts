import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { createTodo, Todo } from './todo.model';
import { TodosStore } from './todos.store';

@Injectable({ providedIn: 'root' })
export class TodosService {
  constructor(private todosStore: TodosStore, private afs: AngularFirestore) {}

  private getGoalDocument(goalId: string): AngularFirestoreDocument {
    return this.afs.collection('goals').doc(goalId);
  }

  private getTodosCollection(goalId: string): AngularFirestoreCollection {
    return this.getGoalDocument(goalId).collection('todos');
  }

  getTodos(goalId): Observable<Todo[]> {
    return this.getTodosCollection(goalId)
      .valueChanges()
      .pipe(tap((todos: Todo[]) => this.todosStore.set(todos)));
  }

  addTodo(goalId: string, title: string) {
    const id = this.afs.createId();
    const todo = createTodo({ id, goalId, title });

    const batch = this.afs.firestore.batch();
    batch.set(this.getTodosCollection(goalId).doc(id).ref, todo);
    batch.update(this.getGoalDocument(goalId).ref, { todos: firestore.FieldValue.arrayUnion(id) });
    batch.commit();
  }

  updateTodo(goalId: string, todo: Todo) {
    this.getTodosCollection(goalId)
      .doc(todo.id)
      .set(createTodo(todo));
  }

  deleteTodo(goalId: string, todo: Todo) {
    const batch = this.afs.firestore.batch();
    batch.delete(this.getTodosCollection(goalId).doc(todo.id).ref);
    batch.update(this.getGoalDocument(goalId).ref, { todos: firestore.FieldValue.arrayRemove(todo.id) });
    batch.commit();
  }
}
