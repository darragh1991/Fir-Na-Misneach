import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

import { Faq } from '../components/models/faq.model';

@Injectable()
export class FaqService {

  readonly #httpClient = inject(HttpClient);
  data: Faq[] = [];

  getFaqs$(): Observable<Faq[]> {
    return this.#httpClient.get<{ data: Faq[] }>('/faqs').pipe(
      map(({ data }) =>  (data)),
      catchError((error) => {
        console.error('Error loading faqs', error);
        return of([]);
    }));
  }
}
