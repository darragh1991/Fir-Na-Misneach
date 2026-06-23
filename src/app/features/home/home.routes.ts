import { Routes } from "@angular/router";

export default <Routes> [
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
      }
    ]
   }
];
