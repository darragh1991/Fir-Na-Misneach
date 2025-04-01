import { Component, DestroyRef, inject } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { ValidateLoginFormService } from '../../services/validate-login-form.service';
import { FormGroup } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ToasterService } from '../../../../ui/toaster/toaster.service';
import { debounceTime } from 'rxjs';
import { ToasterComponent } from '../../../../ui/toaster/toaster.component';
@Component({
    selector: 'app-login',
    imports: [LoginFormComponent, ToasterComponent],
    providers: [ValidateLoginFormService],
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly validateLoginFormService = inject(ValidateLoginFormService);
  private readonly router = inject(Router);
  private readonly toasterService = inject(ToasterService);
  private readonly destroyedRef = inject(DestroyRef);
  private readonly debounceTime = 1000;

  submitLoginForm(form: FormGroup): void {
    const email = form.get('email')?.value ?? '';
    const password = form.get('password')?.value ?? '';
    this.validateLoginFormService.validateLogin(email, password).pipe(
      takeUntilDestroyed(this.destroyedRef),
      debounceTime(this.debounceTime),
    ).subscribe({
      next: (data) => {
        if (data.success) {
          this.toasterService.renderToaster('Login successful!', true, 'success');
          this.router.navigate(['/home']);
        } else {
          this.toasterService.renderToaster('Invalid credentials', true, 'error');
        }
      },
      error: () => {
        this.toasterService.renderToaster('Login error', true, 'error');
      }
    });
  }
}
