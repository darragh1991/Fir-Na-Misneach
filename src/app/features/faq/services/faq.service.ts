import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';

import { Faq, FaqResponse } from '../components/models/faq.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable()
export class FaqService {

  readonly #httpClient = inject(HttpClient);

  readonly faqs = toSignal(
    this.#httpClient.get<{data: Faq[]}>('api/faqs').pipe(
      map(({ data }) => {
        const response = new FaqResponse();
        response.faqs = data;
        return response;
      }),
      catchError((_error) => {
        const response = new FaqResponse();
        response.hasError = true;
        return of(response);
      })
    ),
    { initialValue: new FaqResponse() }
  );
}
