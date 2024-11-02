import { Component } from '@angular/core';

@Component({
  selector: 'app-authentication-layout',
  standalone: true,
  imports: [],
  templateUrl: './authentication-layout.component.html',
  styleUrl: './authentication-layout.component.scss'
})
export class AuthenticationLayoutComponent {

  progressTracker = 0;
  #amoutOfSteps = 2;

  testProgress() {
    const increment = 100 / this.#amoutOfSteps;
    this.progressTracker += increment;
    if (this.progressTracker > 100) {
      this.progressTracker = 100;
    }
    alert('Stop Joshua Woods');
  }
}
