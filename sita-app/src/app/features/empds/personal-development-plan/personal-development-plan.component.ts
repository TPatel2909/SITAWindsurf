import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-development-plan',
  templateUrl: './personal-development-plan.component.html',
  styleUrls: ['./personal-development-plan.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class PersonalDevelopmentPlanComponent implements OnInit {
  pdpForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.pdpForm = this.fb.group({
      employeeInfo: this.fb.group({
        name: ['', Validators.required],
        employeeNumber: ['', Validators.required],
        jobTitle: ['', Validators.required],
        department: ['', Validators.required],
        supervisor: ['', Validators.required],
        period: ['', Validators.required]
      }),
      developmentNeeds: this.fb.array([])
    });
  }

  ngOnInit(): void {
    // Add initial development need
    this.addDevelopmentNeed();
  }

  get developmentNeeds() {
    return this.pdpForm.get('developmentNeeds') as FormArray;
  }

  addDevelopmentNeed() {
    const developmentNeed = this.fb.group({
      competencyArea: ['', Validators.required],
      developmentRequired: ['', Validators.required],
      proposedActions: ['', Validators.required],
      timeframe: ['', Validators.required],
      supportNeeded: ['', Validators.required],
      priority: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });

    this.developmentNeeds.push(developmentNeed);
  }

  removeDevelopmentNeed(index: number) {
    this.developmentNeeds.removeAt(index);
  }

  onSubmit() {
    if (this.pdpForm.valid) {
      console.log('PDP Form submitted:', this.pdpForm.value);
      // TODO: Implement API call to save PDP
    }
  }
}
