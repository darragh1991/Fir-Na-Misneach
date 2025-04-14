import { Component, computed, DestroyRef, effect, inject } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { ValidateLoginFormService } from '../../services/validate-login-form.service';
import { FormGroup } from '@angular/forms';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ToasterService } from '../../../../ui/toaster/toaster.service';
import { debounceTime, finalize, of, tap } from 'rxjs';
import { ToasterComponent } from '../../../../ui/toaster/toaster.component';
import { LoginForm, LoginResult } from '../../models/login-form.model';
import { LoginStore } from '../../store/login.store';
import { state } from '@angular/animations';
@Component({
    selector: 'app-login',
    imports: [LoginFormComponent, ToasterComponent],
    providers: [ValidateLoginFormService, LoginStore],
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly router = inject(Router);
  private readonly loginStore = inject(LoginStore);


constructor() {
  effect(() => {
    if (this.loginStore.success()) {
      this.router.navigate(['/landing']);
    }
  });
}

  protected readonly submitLoginForm = (loginForm: LoginForm) => this.loginStore.validateLogin(loginForm);

}
