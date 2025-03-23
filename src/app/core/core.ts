import {
  Routes,
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withRouterConfig
} from '@angular/router';
import { isDevMode, provideEnvironmentInitializer } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { developmentInitializer, productionInitializer } from './enviroment';

export interface CoreOptions {
  routes: Routes;
  production?: boolean;
}

export function provideCore({ routes }: CoreOptions) {
  return [
    provideAnimationsAsync(),
    provideHttpClient(),
    provideEnvironmentInitializer(initializeApp),
    provideRouter(
      routes,
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      withComponentInputBinding(),
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'top'
      }),
    ),
    {
      useValue: () => isDevMode() ? developmentInitializer() : productionInitializer(),
      multi: true
    }
  ];
}

export function initializeApp(): Promise<void> {
  return new Promise((resolve) => {
    if (isDevMode()) {
      developmentInitializer();
    } else {
      productionInitializer();
    }
    resolve();
  });
}
