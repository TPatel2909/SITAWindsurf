import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'empds',
    loadChildren: () => import('./features/empds/empds.module').then(m => m.EmpdsModule)
  },
  { path: 'iappms', redirectTo: '/home', pathMatch: 'full' },
  { path: 'ess', redirectTo: '/home', pathMatch: 'full' },
  { path: 'reports', redirectTo: '/home', pathMatch: 'full' }
];
