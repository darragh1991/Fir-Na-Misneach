import { Routes } from "@angular/router";

export default <Routes> [
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
      }
    ]
   }
]
