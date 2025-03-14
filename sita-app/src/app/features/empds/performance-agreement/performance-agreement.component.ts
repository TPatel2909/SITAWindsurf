import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

interface PerformanceAgreement {
  employerDetails: {
    fullName: string;
    position: string;
  };
  employeeDetails: {
    fullName: string;
    position: string;
    persalNumber: string;
    component: string;
    unit: string;
    jobTitle: string;
    occupationalClassification: string;
  };
  jobPurpose: string;
  validityPeriod: {
    startDate: Date;
    endDate: Date;
  };
  kras: {
    description: string;
    weight: number;
  }[];
  gafs: {
    description: string;
    weight: number;
  }[];
  developmentRequirements: string[];
  signatures: {
    employee: {
      name: string;
      signature: string;
      date: Date;
    };
    supervisor: {
      name: string;
      signature: string;
      date: Date;
    };
  };
}

@Component({
  selector: 'app-performance-agreement',
  templateUrl: './performance-agreement.component.html',
  styleUrls: ['./performance-agreement.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ]
})
export class PerformanceAgreementComponent {
  agreementForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.agreementForm = this.fb.group({
      employerDetails: this.fb.group({
        fullName: ['', Validators.required],
        position: ['', Validators.required]
      }),
      employeeDetails: this.fb.group({
        fullName: ['', Validators.required],
        position: ['', Validators.required],
        persalNumber: ['', Validators.required],
        component: ['', Validators.required],
        unit: ['', Validators.required],
        jobTitle: ['', Validators.required],
        occupationalClassification: ['', Validators.required]
      }),
      jobPurpose: ['', Validators.required],
      validityPeriod: this.fb.group({
        startDate: ['', Validators.required],
        endDate: ['', Validators.required]
      }),
      kras: this.fb.array([]),
      gafs: this.fb.array([]),
      developmentRequirements: ['', Validators.required],
      signatures: this.fb.group({
        employee: this.fb.group({
          name: ['', Validators.required],
          signature: ['', Validators.required],
          date: ['', Validators.required]
        }),
        supervisor: this.fb.group({
          name: ['', Validators.required],
          signature: ['', Validators.required],
          date: ['', Validators.required]
        })
      })
    });
  }

  onSubmit() {
    if (this.agreementForm.valid) {
      console.log('Form submitted:', this.agreementForm.value);
      // TODO: Implement form submission logic
      this.router.navigate(['/empds']);
    } else {
      this.markFormGroupTouched(this.agreementForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else if (control instanceof FormArray) {
        control.controls.forEach(group => {
          this.markFormGroupTouched(group as FormGroup);
        });
      }
    });
  }
}
