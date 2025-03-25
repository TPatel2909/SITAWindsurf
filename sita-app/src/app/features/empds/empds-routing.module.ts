import { Routes } from '@angular/router';
import { PerformanceAgreementComponent } from './performance-agreement/performance-agreement.component';
import { WorkplanLevel112Component } from './workplan-level-1-12/workplan-level-1-12.component';
import { WorkplanLevel1316Component } from './workplan-level-13-16/workplan-level-13-16.component';
import { EmpdsComponent } from './empds/empds.component';

export const empdsRoutes: Routes = [
  {
    path: '',
    component: EmpdsComponent,
    children: [
      {
        path: '',
        redirectTo: 'performance-agreement',
        pathMatch: 'full'
      },
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
      },
      {
        path: 'personal-development-plan',
        loadComponent: () => import('./personal-development-plan/personal-development-plan.component')
          .then(m => m.PersonalDevelopmentPlanComponent),
        title: 'Personal Development Plan - SITA EMPDS'
      }
    ]
  }
];
