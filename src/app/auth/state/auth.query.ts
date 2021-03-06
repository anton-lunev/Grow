import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { AuthState, AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {
  isLoggedIn$ = this.select(state => toBoolean(state.user));
  currentUser$ = this.select(state => state.user);

  constructor(protected store: AuthStore) {
    super(store);
  }

  getCurrentUser() {
    return this.getSnapshot().user;
  }
}
