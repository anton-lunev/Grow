import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { User } from './auth.model';

export interface AuthState {
  user: User | null;
  loading: boolean;
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'auth'})
export class AuthStore extends Store<AuthState> {
  private static userKey = 'user';
  private static initialState: AuthState = {
    user: JSON.parse(localStorage.getItem(AuthStore.userKey)) || null,
    loading: true
  };

  constructor() {
    super(AuthStore.initialState);
  }

  login(user: firebase.User) {
    localStorage.setItem(AuthStore.userKey, JSON.stringify(user.toJSON()));
    this.update({user: user.toJSON() as User});
  }

  logout() {
    localStorage.removeItem(AuthStore.userKey);
    this.update(AuthStore.initialState);
  }
}
