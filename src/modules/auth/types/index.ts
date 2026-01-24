export type OAuthProvider = 'google' | 'github' | 'facebook';

export interface User {
  id: string;
  email?: string;
  login?: string;
  userName?: string;
}
