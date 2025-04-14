import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { LoginResult } from '../models/login-form.model';

@Injectable()
export class ValidateLoginFormService {

  private readonly httpClient = inject(HttpClient);

  validateLogin(email: string, password: string): Observable<LoginResult> {
    const loginResult: LoginResult = {success: false};
    return this.httpClient.post<{data: LoginResult}>('api/login', { password, email }).pipe(
      map(({data}) => {
        if (data.success) {
          loginResult.success = true;
        } else {
          loginResult.success = false;
          loginResult.error = new Error('Invalid credentials');
        }
        return loginResult;
      }),
      catchError((error) => of({ success: false, error }))
    );
  }
}
