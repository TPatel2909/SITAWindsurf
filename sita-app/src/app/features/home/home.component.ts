import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from "../../core/header/header.component";

interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HeaderComponent
]
})
export class HomeComponent {
  featureCards: FeatureCard[] = [
    {
      title: 'EMPDS',
      description: 'Employee Performance Management and Development System',
      icon: 'assessment',
      route: '/empds'
    },
    {
      title: 'IAPPMS',
      description: 'Integrated Application Portfolio and Project Management System',
      icon: 'folder_special',
      route: '/iappms'
    },
    {
      title: 'ESS',
      description: 'Employee Self Service',
      icon: 'person',
      route: '/ess'
    },
    {
      title: 'Reports',
      description: 'Generate and view reports',
      icon: 'bar_chart',
      route: '/reports'
    }
  ];
}
