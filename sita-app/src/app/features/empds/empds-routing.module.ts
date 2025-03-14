import { Routes } from '@angular/router';
import { PerformanceAgreementComponent } from './performance-agreement/performance-agreement.component';

export const empdsRoutes: Routes = [
  {
    path: 'performance-agreement',
    component: PerformanceAgreementComponent,
    title: 'Performance Agreement - SITA EMPDS'
  }
];
