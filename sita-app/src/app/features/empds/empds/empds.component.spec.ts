import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdsComponent } from './empds.component';

describe('EmpdsComponent', () => {
  let component: EmpdsComponent;
  let fixture: ComponentFixture<EmpdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
