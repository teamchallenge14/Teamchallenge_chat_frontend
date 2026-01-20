
export type OAuthProvider = 'google' | 'github' | 'facebook';

export interface AuthResponse {
  accessToken: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}