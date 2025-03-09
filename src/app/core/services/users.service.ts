import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, catchError, of, Observable } from 'rxjs';

import { Users } from '../constants/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly httpClient = inject(HttpClient);

  getUsers$(): Observable<Users> {
    return this.httpClient.get<{ data: Users }>('/users').pipe(
      map(({ data }) => data),
      catchError((error) => of(error))
    );
  }
}
