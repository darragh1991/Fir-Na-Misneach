import { Routes } from "@angular/router";

export default <Routes> [
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        loadComponent: () => import('./components/faq.component').then(m => m.FaqComponent)
      }
    ]
   }
]
