import { toObservable } from '@angular/core/rxjs-interop';
import { inject, Injectable, signal } from '@angular/core';
import { forkJoin, map, Observable, tap } from 'rxjs';

import { UsersService } from './users.service';
import { AppInit } from '../constants/app-init.model';
import { Users } from '../constants/users.model';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  private readonly users$ = inject(UsersService).getUsers$();
  private readonly users = signal<Users>({ hasError: false });

  get getUsers$(): Observable<Users> {
    return toObservable(this.users);
  }

  init(): Observable<AppInit> {
    return forkJoin([this.users$]).pipe(
      tap(([users]) => {
        this.users.set(users);
      }),
      map(([users]) => ({ users }))
    );
  }
}
