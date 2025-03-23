import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FaqService } from '../services/faq.service';

@Component({
    selector: 'app-faq',
    imports: [AsyncPipe],
    providers: [FaqService],
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent  {

  private readonly faqService: FaqService = inject(FaqService);
  protected readonly renderFaq$ = this.faqService.getFaqs$();

}
