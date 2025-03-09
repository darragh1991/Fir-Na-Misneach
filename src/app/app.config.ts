import { ApplicationConfig, inject, provideAppInitializer } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { routes } from './app.routes';
import { provideCore } from './core/core';
import { AppInitService } from './core/services/app-init.service';

export function initializeApp() {
  const appInitService = inject(AppInitService);
  return () => lastValueFrom(appInitService.init());
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideCore({ routes }),
    provideHttpClient(withFetch()),
    provideAppInitializer(initializeApp())
  ]
};

