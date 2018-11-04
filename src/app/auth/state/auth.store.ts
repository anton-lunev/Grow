import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { auth } from 'firebase';

export interface User extends firebase.UserInfo {
  apiKey: string;
  appName: string;
  authDomain: string;
  createdAt: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  lastLoginAt: string;
  providerData: (firebase.UserInfo | null)[];
  stsTokenManager: {
    accessToken: string
    apiKey: string
    expirationTime: number
    refreshToken: string
  };
}

export interface AuthState {
  user: User | null;
}

export const initialState: AuthState = {
  user: null
};

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'auth'})
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(initialState);
  }

  login(user: firebase.User) {
    this.update({user: user.toJSON() as User});
  }

  logout() {
    this.update(initialState);
  }
}
