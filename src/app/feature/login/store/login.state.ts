import { LoginResult } from '../models/login-form.model';

export const initialLoginState: LoginResult = {
  success: false,
  error: undefined,
  isLoading: false
}
