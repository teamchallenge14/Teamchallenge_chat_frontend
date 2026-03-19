export type OAuthProvider = 'google' | 'github' | 'facebook';

export interface User {
  id: string;
  email?: string;
  login?: string;
  userName?: string;
}

export enum SignUpStepsEnum {
  ENTER_EMAIL = 1,
  ENTER_USERNAME = 2,
  EMAIL_VERIFICATION = 3,
  ENTER_PERSONAL_INFO = 4,
  ENTER_INTERESTS = 5,
  EMAIL_EDIT = 6,
  FINALY_STEP = 7,
}

export enum GuestStepsEnum {
  GUEST_USERNAME = 1,
  GUEST_INFO = 2,
  GUEST_INTERESTS = 3,
}
