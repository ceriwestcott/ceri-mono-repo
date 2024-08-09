export interface Entry {
  id: string;
  title: string;
  description?: string;
  location?: string;
  date?: string;
  uri: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface Register {
  email: string;
  password: string;
  confirmPassword: string;
}

export enum AuthType {
  Login = 'login',
  Register = 'register',
}
