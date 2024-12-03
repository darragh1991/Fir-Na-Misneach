import {
  Routes,
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withRouterConfig
} from '@angular/router';
import { ENVIRONMENT_INITIALIZER, InjectionToken } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { developmentInitializer, productionInitializer } from './enviroment';

export interface CoreOptions {
  routes: Routes;
}

export function provideCore({ routes }: CoreOptions) {
  return [
    provideAnimationsAsync(),
    provideHttpClient(),
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
      provide: ENVIRONMENT_INITIALIZER,
      useValue: () => isDevMode() ? developmentInitializer() : productionInitializer(),
      multi: true
    }
  ];
}
