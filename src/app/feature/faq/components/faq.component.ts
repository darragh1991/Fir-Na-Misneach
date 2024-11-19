import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FaqService } from '../services/faq.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  providers: [FaqService],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent {

  faqService$ = inject(FaqService).getFaqs().pipe(map(({data}) => data));
}
