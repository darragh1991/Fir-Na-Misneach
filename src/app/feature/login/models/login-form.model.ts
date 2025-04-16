export interface LoginForm {
  email: string;
  password: string;
}
export interface LoginResult {
  isSuccess: boolean;
  error?: Error;
  isLoading?: boolean;
}
