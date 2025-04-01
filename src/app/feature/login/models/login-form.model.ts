import { IUsers } from 'src/app/core/constants/users.model';

export interface LoginForm {
  email: string;
  password: string;
}
export interface LoginResult {
  success: boolean;
  error?: Error;
  user?: IUsers;
}