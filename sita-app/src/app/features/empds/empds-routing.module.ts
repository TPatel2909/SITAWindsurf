import { Routes } from '@angular/router';
import { PerformanceAgreementComponent } from './performance-agreement/performance-agreement.component';
import { WorkplanLevel112Component } from './workplan-level-1-12/workplan-level-1-12.component';
import { WorkplanLevel1316Component } from './workplan-level-13-16/workplan-level-13-16.component';

export const empdsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'performance-agreement',
        component: PerformanceAgreementComponent,
        title: 'Performance Agreement - SITA EMPDS'
      },
      {
        path: 'workplan-1-12',
        component: WorkplanLevel112Component,
        title: 'Workplan Level 1-12 - SITA EMPDS'
      },
      {
        path: 'workplan-13-16',
        component: WorkplanLevel1316Component,
        title: 'SMS Workplan Level 13-16 - SITA EMPDS'
      }
    ]
  }
];
