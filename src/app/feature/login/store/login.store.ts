import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap, debounceTime, pipe, tap, distinctUntilChanged, finalize } from 'rxjs';
import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';

import { initialLoginState } from './login.state'
import { ValidateLoginFormService } from './../services/validate-login-form.service';
import { LoginForm, LoginResult } from '../models/login-form.model';
import { ToasterService } from 'src/app/ui/toaster/toaster.service';

export const LoginStore = signalStore(
  withState(initialLoginState),
  withComputed((store) => ({
    success: computed(() => store.success()),
  })),
  withMethods((store, validateLoginForm = inject(ValidateLoginFormService)) => ({
      validateLogin: rxMethod<LoginForm>(
        pipe(
          debounceTime(200),
          distinctUntilChanged((previous, current) => previous.email === current.email),
          switchMap((loginForm: LoginForm) => {
            const { email, password } = loginForm;
            return validateLoginForm.validateLogin(email, password).pipe(
              tapResponse({
                next: (result: LoginResult) => {
                  patchState(store, () => result);
                },
                error: (error: Error) => {
                  patchState(store, () => ({
                     success: false, error: error, isLoading: false
                  }));
                }
              }), finalize(() => {
                const toasterService = inject(ToasterService);
                toasterService.renderToaster('Login successful', true, 'success');
              })
            );
        })
      )
    )
  })
));
