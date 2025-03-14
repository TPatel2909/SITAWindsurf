import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceAgreementComponent } from './performance-agreement.component';

describe('PerformanceAgreementComponent', () => {
  let component: PerformanceAgreementComponent;
  let fixture: ComponentFixture<PerformanceAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceAgreementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
