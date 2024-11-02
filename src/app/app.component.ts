import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { AuthenticationLayoutComponent } from "./layout/authentication-layout/authentication-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainLayoutComponent, AuthenticationLayoutComponent],
  template: `<app-main-layout />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'international-sports-club';

  #data = inject(HttpClient);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.#data.get('http://localhost:3000/users').subscribe((data) => console.log(data));
  }
}
