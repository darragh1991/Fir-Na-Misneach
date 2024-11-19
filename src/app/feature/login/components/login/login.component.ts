import { Component } from '@angular/core';
import { LoginOrchestratorComponent } from '../login-orchestrator/login-orchestrator.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginOrchestratorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
