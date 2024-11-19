import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'landing'
  },
  {
    path: 'landing',
    loadChildren: () => import('./feature/landing/landing.routes')
  },
  {
    path: 'faq',
    loadChildren: () => import('./feature/faq/faq.routes')
  },
  {
    path: 'home',
    loadChildren: () => import('./feature/home/home.routes')
  },
  {
    path: 'login',
    loadChildren: () => import('./feature/login/login.routes')
  }
];
