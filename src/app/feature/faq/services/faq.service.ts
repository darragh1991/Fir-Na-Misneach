import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, tap } from 'rxjs';
export interface Faq {
  id: number;
  question: string;
  answer: string;
}
@Injectable()
export class FaqService {

  httpClient = inject(HttpClient);
  private faqsSignal = signal<Faq[]>([]);
  data: Faq[] = [];

  loadFaqs() {
    return this.httpClient.get<{ data: Faq[] }>('/faqs').pipe(
      tap(({ data }) => {
        this.data = data;
        this.faqsSignal.set(data)
  }));
  }
  resetFaqs(): void {
    this.faqsSignal.set(this.data);
  }
  filterByFaq(filter: string): void {
    this.resetFaqs();
    this.faqsSignal.update((faqs) => {
      return faqs.filter(faq => {
        return faq.question.toLowerCase().includes(filter.toLowerCase());
      });
    });
  }

  getFaqs$(): Observable<Faq[]> {
    return toObservable(this.faqsSignal);
  }
}
