import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';

import { LoginStateService } from '../../services/login-state.service';
import { LoginForm } from '../../models/login-form.model';
import { ToasterInfo } from '../../../../ui/toaster/model/toaster-info.model';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgTemplateOutlet],
  providers: [LoginStateService],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {

  private readonly passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  protected readonly loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)]),
  });

  private readonly loginStateService = inject(LoginStateService);
  protected readonly loginFormSubmit = output<LoginForm>();
  protected readonly emitToaster = output<ToasterInfo>();

  constructor() {
    this.loadFromLocalStorage();
  }

  protected onCheckboxChange(event: Event): void  {
    const { checked } = event.target as HTMLInputElement;
    this.loginStateService.rememberMe = checked;
    if (checked) {
      const email = this.loginForm.get('email')?.value ?? '';
      this.loginStateService.rememberedUsername = email;
    }
  }

  protected isRememberMeEnabled = (): boolean => this.loginStateService.rememberMe();

  protected checkErrorCase(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    return Boolean(control?.invalid && control?.touched);
  }

  protected onSubmit(): void {
    if (this.loginForm.valid && this.loginForm.dirty) {
      const email = this.loginForm.get('email')?.value ?? '';
      const password = this.loginForm.get('password')?.value ?? '';
      this.loginFormSubmit.emit({
        email,
        password
      });
    } else {
      this.loginForm.markAllAsTouched();
      this.checkErrorCase('email');
      this.checkErrorCase('password');
      const toasterInfo: ToasterInfo = {
        toasterMessage: 'Please fill in all required fields correctly.',
        promptToaster: true,
        toasterType: 'warning'}
      this.emitToaster.emit(toasterInfo);
    }
  }

  private loadFromLocalStorage(): void {
    const isChecked = this.loginStateService.rememberMe();
    if (isChecked) {
      const rememberedUsername = this.loginStateService.rememberedUsername();
      this.loginForm.patchValue({ email: rememberedUsername });
    }
  }
}
