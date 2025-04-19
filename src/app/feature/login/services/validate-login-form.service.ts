import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { LoginResult } from '../models/login-form.model';

@Injectable()
export class ValidateLoginFormService {

  private readonly httpClient = inject(HttpClient);

  validateLogin(email: string, password: string): Observable<LoginResult> {
    const loginResult: LoginResult = {isSuccess: false};
    return this.httpClient.post<{data: LoginResult}>('api/login', { password, email }).pipe(
      map(({data}) => {
        if (data.isSuccess) {
          loginResult.isSuccess = true;
        } else {
          loginResult.isSuccess = false;
          loginResult.error = new Error('Invalid credentials');
        }
        return loginResult;
      }),
      catchError((error) => of({ isSuccess: false, error }))
    );
  }
}
