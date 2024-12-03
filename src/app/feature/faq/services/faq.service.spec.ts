import { TestBed } from '@angular/core/testing';

import { FaqService } from './faq.service';
import { provideHttpClient } from '@angular/common/http';

describe('FaqService', () => {
  let service: FaqService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaqService, provideHttpClient()],
    });
    service = TestBed.inject(FaqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
