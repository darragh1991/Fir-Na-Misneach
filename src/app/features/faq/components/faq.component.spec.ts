import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqComponent } from './faq.component';
import { provideHttpClient } from '@angular/common/http';

describe('FaqComponent', () => {
  let fixture: ComponentFixture<FaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqComponent],
      providers: [
        provideHttpClient()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture).toMatchSnapshot();
  });
});
