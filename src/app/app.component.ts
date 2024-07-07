import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'international-sports-club';

  data = inject(HttpClient);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.data.get('http://localhost:3000/users').subscribe((data) => console.log(data));

  }
}
