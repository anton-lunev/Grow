import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { filter } from 'rxjs/operators';
import { AuthState, AuthStore } from './auth.store';

@Injectable({providedIn: 'root'})
export class AuthQuery extends Query<AuthState> {
  isLoggedIn$ = this.select(state => toBoolean(state.user));

  constructor(protected store: AuthStore) {
    super(store);
  }

  getCurrentUser() {
    return this.select(state => state.user).pipe(filter(user => !!user));
  }
}
