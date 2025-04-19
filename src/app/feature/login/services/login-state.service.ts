import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStateService {

  private readonly _rememberMe = signal<boolean>(false);
  private readonly _rememberedUsername = signal<string>('');

  constructor() {
    this.loadFromLocalStorage();
  }
  get rememberMe(): Signal<boolean> {
    return this._rememberMe.asReadonly();
  }

  get rememberedUsername(): Signal<string> {
    return this._rememberedUsername.asReadonly();
  }
  set rememberMe(hasRememberMe: boolean) {
    this._rememberMe.set(hasRememberMe);
    if (!hasRememberMe) {
      localStorage.removeItem('rememberMe');
      localStorage.removeItem('rememberedUsername');
      this._rememberedUsername.set('');
    }
  }

  set rememberedUsername(username: string) {
    this._rememberedUsername.set(username);
    localStorage.setItem('rememberMe', JSON.stringify(this._rememberMe()));
    localStorage.setItem('rememberedUsername', username);
  }

  private loadFromLocalStorage() {
    const storedRememberMe = localStorage.getItem('rememberMe');
    const storedUsername = localStorage.getItem('rememberedUsername');

    if (storedRememberMe) {
      this._rememberMe.set(JSON.parse(storedRememberMe));
    }
    if (storedUsername) {
      this._rememberedUsername.set(storedUsername);
    }
  }
}
