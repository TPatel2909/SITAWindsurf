import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { PerformanceAgreementComponent } from './features/empds/performance-agreement/performance-agreement.component';
import { WorkplanLevel112Component } from './features/empds/workplan-level-1-12/workplan-level-1-12.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pda', component: PerformanceAgreementComponent},
  { path: 'workplan112', component: WorkplanLevel112Component},
  
  {path: 'empds',
  loadChildren: () => import('./features/empds/empds.module').then(m => m.EmpdsModule)},
  { path: 'iappms', redirectTo: '/home', pathMatch: 'full' },
  { path: 'ess', redirectTo: '/home', pathMatch: 'full' },
  { path: 'reports', redirectTo: '/home', pathMatch: 'full' }
];
