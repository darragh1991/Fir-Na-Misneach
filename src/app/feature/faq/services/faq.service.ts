import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

import { Faq, FaqResponse } from '../components/models/faq.model';

@Injectable()
export class FaqService {

  private readonly httpClient = inject(HttpClient);

  getFaqs$(): Observable<FaqResponse> {
    const faqResponse: FaqResponse = new FaqResponse();
    return this.httpClient.get<{data: Faq[]}>('api/faqs').pipe(
      map(({data}) =>  {
        faqResponse.faqs = data;
        return faqResponse;
      }),
      catchError((error) => {
        console.error('Error loading faqs', error);
        faqResponse.hasError = true;
        return of(faqResponse);
    }));
  }
}
