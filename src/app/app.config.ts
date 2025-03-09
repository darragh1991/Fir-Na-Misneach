import { ApplicationConfig, inject, provideAppInitializer } from '@angular/core';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { routes } from './app.routes';
import { provideCore } from './core/core';
import { AppInitService } from './core/services/app-init.service';
import { errorInterceptor } from './core/interceptors/error.interceptor';

export function initializeApp(appInitService: AppInitService) {

  return () => lastValueFrom(appInitService.init());
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideCore({ routes }),
    provideHttpClient(withInterceptors([errorInterceptor]), withFetch()),
    provideAppInitializer(() => {
      const appInitService = inject(AppInitService);
      return initializeApp(appInitService)();
    })
  ]
};

