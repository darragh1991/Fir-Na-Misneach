import { TestBed } from '@angular/core/testing';

import { AppInitService } from './app-init.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AppInitService', () => {
  let service: AppInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({
         providers: [
          provideHttpClient(),
          provideHttpClientTesting(),
          AppInitService
         ]
        });
    service = TestBed.inject(AppInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
