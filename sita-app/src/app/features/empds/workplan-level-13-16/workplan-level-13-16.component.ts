import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

interface WorkplanKRA {
  id: number;
  description: string;
  weight: number;
  keyActivities: string[];
  indicators: string[];
  targetDate: Date;
  evidence: string;
  resources: string;
  developmentNeeds?: string;
  strategicObjective?: string;
}

@Component({
  selector: 'app-workplan-level-13-16',
  templateUrl: './workplan-level-13-16.component.html',
  styleUrls: ['./workplan-level-13-16.component.scss'],
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
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class WorkplanLevel1316Component {
  workplanForm: FormGroup;
  displayedColumns: string[] = [
    'description',
    'strategicObjective',
    'weight',
    'keyActivities',
    'indicators',
    'targetDate',
    'evidence',
    'resources',
    'developmentNeeds',
    'actions'
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.workplanForm = this.fb.group({
      employeeDetails: this.fb.group({
        name: ['', Validators.required],
        jobTitle: ['', Validators.required],
        component: ['', Validators.required],
        supervisor: ['', Validators.required],
        smsLevel: ['', [Validators.required, Validators.min(13), Validators.max(16)]],
        period: this.fb.group({
          startDate: ['', Validators.required],
          endDate: ['', [Validators.required, this.endDateValidator.bind(this)]]
        })
      }),
      kras: this.fb.array([])
    });

    // Add initial KRA
    this.addKRA();

    // Subscribe to start date changes to validate end date
    this.workplanForm.get('employeeDetails.period.startDate')?.valueChanges.subscribe(() => {
      this.workplanForm.get('employeeDetails.period.endDate')?.updateValueAndValidity();
    });
  }

  get kras() {
    return this.workplanForm.get('kras') as FormArray;
  }

  createKRA() {
    return this.fb.group({
      description: ['', [Validators.required, Validators.minLength(10)]],
      strategicObjective: ['', [Validators.required, Validators.minLength(10)]],
      weight: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      keyActivities: ['', [Validators.required, Validators.minLength(10)]],
      indicators: ['', [Validators.required, Validators.minLength(10)]],
      targetDate: ['', [Validators.required, this.kraTargetDateValidator.bind(this)]],
      evidence: ['', [Validators.required, Validators.minLength(5)]],
      resources: ['', [Validators.required, Validators.minLength(5)]],
      developmentNeeds: ['', Validators.minLength(5)]
    });
  }

  addKRA() {
    if (this.kras.length < 8) { // Maximum 8 KRAs allowed for SMS levels
      this.kras.push(this.createKRA());
    }
  }

  removeKRA(index: number) {
    if (this.kras.length > 1) { // Always keep at least one KRA
      this.kras.removeAt(index);
    }
  }

  getTotalWeight(): number {
    return this.kras.controls.reduce((total, kra) => {
      const weight = parseFloat(kra.get('weight')?.value || '0');
      return total + weight;
    }, 0);
  }

  onSubmit() {
    if (this.workplanForm.valid && this.getTotalWeight() === 100) {
      console.log('Form submitted:', this.workplanForm.value);
      // TODO: Implement form submission logic
      this.router.navigate(['/empds']);
    } else {
      this.markFormGroupTouched(this.workplanForm);
    }
  }

  private endDateValidator(control: AbstractControl): ValidationErrors | null {
    const startDate = this.workplanForm?.get('employeeDetails.period.startDate')?.value;
    const endDate = control.value;

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      if (end <= start) {
        return { endDateInvalid: true };
      }
    }
    return null;
  }

  private kraTargetDateValidator(control: AbstractControl): ValidationErrors | null {
    const startDate = this.workplanForm?.get('employeeDetails.period.startDate')?.value;
    const endDate = this.workplanForm?.get('employeeDetails.period.endDate')?.value;
    const targetDate = control.value;

    if (startDate && endDate && targetDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const target = new Date(targetDate);

      if (target < start || target > end) {
        return { targetDateOutOfRange: true };
      }
    }
    return null;
  }

  private markFormGroupTouched(formGroup: FormGroup | FormArray) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup || control instanceof FormArray) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
