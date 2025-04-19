import { LoginResult } from '../models/login-form.model';

export const initialLoginState: LoginResult = {
  isSuccess: false,
  error: undefined,
  isLoading: false
}
