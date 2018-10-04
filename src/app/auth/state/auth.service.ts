import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { AuthStore } from './auth.store';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(
    private authStore: AuthStore,
    private afAuth: AngularFireAuth
  ) {}

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.socialSignIn(provider)
      .then(userCredentials => this.authStore.login(userCredentials.additionalUserInfo));
  }

  private socialSignIn(provider: AuthProvider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }
}
