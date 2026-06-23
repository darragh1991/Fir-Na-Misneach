import { Component, effect, inject } from '@angular/core';
import { Router } from '@angular/router';

import { LoginFormComponent } from '../login-form/login-form.component';

import { LoginForm} from '../../models/login-form.model';
import { LoginStore } from '../../store/login.store';
import { ValidateLoginFormService } from '../../services/validate-login-form.service';
import { ToasterService } from '../../../../ui/toaster/toaster.service';
import { ToasterInfo } from 'src/app/ui/toaster/model/toaster-info.model';
@Component({
    selector: 'app-login',
    imports: [LoginFormComponent],
    providers: [LoginStore, ValidateLoginFormService],
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {

private readonly router = inject(Router);
private readonly loginStore = inject(LoginStore);
private readonly toasterService = inject(ToasterService);

constructor() {
  effect(() => {
    if (this.loginStore.isSuccess()) {
      this.router.navigate(['/landing']);
    }
  });
}

protected readonly promptToaster = (toasterInfo: ToasterInfo) => this.toasterService.renderToaster(toasterInfo);
protected readonly submitLoginForm = (loginForm: LoginForm) => this.loginStore.validateLogin(loginForm);
}
