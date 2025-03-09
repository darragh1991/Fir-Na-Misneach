import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { catchError, map, Observable, of, tap } from 'rxjs';
export interface Faq {
  id: number;
  question: string;
  answer: string;
}
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
