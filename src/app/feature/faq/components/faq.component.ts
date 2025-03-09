import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FaqService } from '../services/faq.service';
import { take } from 'rxjs';

@Component({
    selector: 'app-faq',
    imports: [AsyncPipe],
    providers: [FaqService],
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent implements OnInit {

  #faqService = inject(FaqService);
  renderFaq$ = this.#faqService.getFaqs$();
  ngOnInit(): void {
    this.#faqService.loadFaqs().pipe(take(1)).subscribe();
  }
  filterFaq(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.#faqService.filterByFaq(filter);
  }

  clearFilter() {
    const inputElement = document.querySelector('.form-control') as HTMLInputElement;
    inputElement.value = '';
    this.#faqService.resetFaqs();
  }
}
