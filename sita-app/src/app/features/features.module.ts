import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import standalone components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    // Import standalone components
    HomeComponent,
    LoginComponent
  ]
})
export class FeaturesModule { }
