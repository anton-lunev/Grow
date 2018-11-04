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
