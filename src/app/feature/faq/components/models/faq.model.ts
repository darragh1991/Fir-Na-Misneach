export interface Faq {
  id: number;
  question: string;
  answer: string;
}

export class FaqResponse {
  faqs?: Faq[] = [];
  hasError?: boolean = false;
}
