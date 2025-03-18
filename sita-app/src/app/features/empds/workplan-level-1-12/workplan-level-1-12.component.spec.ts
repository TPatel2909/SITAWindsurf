import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplanLevel112Component } from './workplan-level-1-12.component';

describe('WorkplanLevel112Component', () => {
  let component: WorkplanLevel112Component;
  let fixture: ComponentFixture<WorkplanLevel112Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkplanLevel112Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkplanLevel112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
