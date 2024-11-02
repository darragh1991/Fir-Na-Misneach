import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthenticationLayoutComponent } from './layout/authentication-layout/authentication-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthenticationLayoutComponent,
  },
  {
    path: 'home',
    component: MainLayoutComponent,
  }
];
