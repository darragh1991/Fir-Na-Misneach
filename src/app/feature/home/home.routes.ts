import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home.component";

export default <Routes> [
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        loadComponent: () => import('./components/home.component').then(m => m.HomeComponent)
      }
    ]
   }
]
