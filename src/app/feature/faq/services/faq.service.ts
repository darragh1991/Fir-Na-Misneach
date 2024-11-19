import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FaqService {

  httpClient = inject(HttpClient);

  getFaqs(): Observable<any> {
    return this.httpClient.get('/faqs');
  }

}
