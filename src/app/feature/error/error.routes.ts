import { Routes } from '@angular/router';

export default <Routes> [
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        loadComponent: () => import('./components/error/error.component').then(m => m.ErrorComponent)
      }
    ]
   }
]

