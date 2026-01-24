export interface UserById {
  id: string;
  email: string;
  login: string;
  firstName: string;
  lastName: string;
  description: string;
  avatar: string;
  profileTheme: string;
  age: 25;
  accountStatus: string;
  gender: string;
  createdAt: string;
  interests: Itererests[];
}

export interface Itererests {
  id: string;
  name: string;
  category: string;
}
