import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'landing'
  },
  {
    path: 'landing',
    loadChildren: () => import('./features/landing/landing.routes')
  },
  {
    path: 'faq',
    loadChildren: () => import('./features/faq/faq.routes')
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.routes')
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.routes')
  },
  {
    path: 'error',
    loadChildren: () => import('./features/error/error.routes')
  }
];
