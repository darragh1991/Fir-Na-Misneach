import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStateService {

  readonly #rememberMe = signal<boolean>(false);
  readonly #rememberedUsername = signal<string>('');

  constructor() {
    this.loadFromLocalStorage();
  }
  get rememberMe(): Signal<boolean> {
    return this.#rememberMe.asReadonly();
  }

  get rememberedUsername(): Signal<string> {
    return this.#rememberedUsername.asReadonly();
  }
  set rememberMe(hasRememberMe: boolean) {
    this.#rememberMe.set(hasRememberMe);
    if (!hasRememberMe) {
      localStorage.removeItem('rememberMe');
      localStorage.removeItem('rememberedUsername');
      this.#rememberedUsername.set('');
    }
  }

  set rememberedUsername(username: string) {
    this.#rememberedUsername.set(username);
    localStorage.setItem('rememberMe', JSON.stringify(this.#rememberMe()));
    localStorage.setItem('rememberedUsername', username);
  }

  private loadFromLocalStorage() {
    const storedRememberMe = localStorage.getItem('rememberMe');
    const storedUsername = localStorage.getItem('rememberedUsername');

    if (storedRememberMe) {
      this.#rememberMe.set(JSON.parse(storedRememberMe));
    }
    if (storedUsername) {
      this.#rememberedUsername.set(storedUsername);
    }
  }
}
