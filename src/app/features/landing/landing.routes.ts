import { Routes } from "@angular/router";

export default <Routes> [
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        loadComponent: () => import('./components/landing/landing.component').then(m => m.LandingComponent)
      }
    ]
   }
];
