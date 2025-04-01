import { TestBed } from '@angular/core/testing';

import { ValidateLoginFormService } from './validate-login-form.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ValidateLoginFormService', () => {
  let service: ValidateLoginFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateLoginFormService, provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(ValidateLoginFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
