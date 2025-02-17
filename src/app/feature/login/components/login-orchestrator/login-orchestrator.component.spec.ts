import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOrchestratorComponent } from './login-orchestrator.component';

describe('LoginOrchestratorComponent', () => {
  let component: LoginOrchestratorComponent;
  let fixture: ComponentFixture<LoginOrchestratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginOrchestratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginOrchestratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
