import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-login-orchestrator',
    imports: [],
    templateUrl: './login-orchestrator.component.html',
    styleUrl: './login-orchestrator.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginOrchestratorComponent {
  progressTracker = 0;
  #amoutOfSteps = 2;

  testProgress() {
    const increment = 100 / this.#amoutOfSteps;
    this.progressTracker += increment;
    if (this.progressTracker > 100) {
      this.progressTracker = 100;
    }
  }
}
