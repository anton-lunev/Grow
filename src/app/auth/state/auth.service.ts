import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AuthQuery } from './auth.query';
import { AuthStore } from './auth.store';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(
    private authStore: AuthStore,
    private afAuth: AngularFireAuth,
    private authQuery: AuthQuery
  ) {}

  init() {
    this.afAuth.authState.subscribe(user => {
      user ? this.authStore.login(user) : this.authStore.logout();
      this.authStore.setLoading(false);
    });
  }

  getAuthState() {
    return this.afAuth.authState;
  }

  getCurrentUser() {
    return this.authQuery.getCurrentUser();
  }

  googleLogin() {
    this.socialSignIn(new auth.GoogleAuthProvider())
      .then(userCredentials => this.authStore.login(userCredentials.user));
  }

  private socialSignIn(provider: AuthProvider): Promise<auth.UserCredential> {
    return this.afAuth.auth.signInWithPopup(provider);
  }
}
