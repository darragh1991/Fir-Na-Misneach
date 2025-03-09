import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Users } from 'src/app/core/constants/users.model';
import { AppInitService } from './../../../../core/services/app-init.service';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {
  protected readonly users$: Observable<Users> = inject(AppInitService).getUsers$;
}
