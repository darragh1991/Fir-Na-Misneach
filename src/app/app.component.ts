import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { AuthenticationLayoutComponent } from "./layout/authentication-layout/authentication-layout.component";
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [MainLayoutComponent, AuthenticationLayoutComponent],
    template: `
  @if(isAutthenticatedLayout) {
      <app-authentication-layout />
    } @else {
      <app-main-layout />
    } `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'Fir na Misneach';

  #httpClient = inject(HttpClient);
  #router = inject(Router);

  isAutthenticatedLayout = false;

  ngOnInit(): void {
    this.#router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        this.isAutthenticatedLayout = event.url.includes('login');
      }
    });
      this.#httpClient.get('/users').subscribe((data) => console.log(data));
  }
}
