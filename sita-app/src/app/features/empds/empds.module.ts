import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { empdsRoutes } from './empds-routing.module';
import { PerformanceAgreementComponent } from './performance-agreement/performance-agreement.component';
import { WorkplanLevel112Component } from './workplan-level-1-12/workplan-level-1-12.component';
import { WorkplanLevel1316Component } from './workplan-level-13-16/workplan-level-13-16.component';
import { EmpdsComponent } from './empds/empds.component';

@NgModule({
  imports: [
    // Angular modules
    CommonModule,
    RouterModule.forChild(empdsRoutes),
    ReactiveFormsModule,
    
    // Material modules
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    
    // Standalone components
    PerformanceAgreementComponent,
    WorkplanLevel112Component,
    WorkplanLevel1316Component,
    EmpdsComponent
  ]
})
export class EmpdsModule { }
