import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

interface NavItem {
  name: string;
  route: string;
  subItems?: NavItem[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, RouterModule]
})
export class HeaderComponent {
  @Output() sidebarToggled = new EventEmitter<void>();
  @Output() navItemSelected = new EventEmitter<NavItem>();

  activeItem: string | null = null;
  navItems: NavItem[] = [
    {
      name: 'EMPDS',
      route: '/empds',
      subItems: [
        { name: 'Performance Agreement', route: '/empds/performance-agreement' },
        { name: 'EPMDS Workplan Level 1-12', route: '/empds/workplan-1-12' },
        { name: 'SMS Workplan Level 13-16', route: '/empds/workplan-13-16' },
        { name: 'Personal Development Plan', route: '/empds/pdp' },
        { name: 'September Review Form', route: '/empds/review' },
        { name: 'Performance Assessment', route: '/empds/assessment' },
        { name: 'Elementary Occupations', route: '/empds/elementary' }
      ]
    },
    {
      name: 'IAPPMS',
      route: '/iappms',
      subItems: [
        { name: 'Annual Performance Plan', route: '/iappms/app' },
        { name: 'Operational Plan', route: '/iappms/operational' },
        { name: 'Quarterly Reviews', route: '/iappms/reviews' }
      ]
    },
    {
      name: 'Reporting',
      route: '/reporting',
      subItems: [
        { name: 'EMPDS Reports', route: '/reporting/empds' },
        { name: 'IAPPMS Reports', route: '/reporting/iappms' },
        { name: 'Custom Reports', route: '/reporting/custom' }
      ]
    },
    {
      name: 'ESS',
      route: '/ess',
      subItems: [
        { name: 'Leave Management', route: '/ess/leave' },
        { name: 'Personal Info', route: '/ess/personal' },
        { name: 'Documents', route: '/ess/documents' }
      ]
    }
  ];

  toggleSidebar(): void {
    this.sidebarToggled.emit();
  }

  onNavItemClick(item: NavItem): void {
    this.activeItem = item.name;
    this.navItemSelected.emit(item);
  }

  getNavIcon(name: string): string {
    const icons: { [key: string]: string } = {
      'EMPDS': 'group',
      'IAPPMS': 'assessment',
      'Reporting': 'description',
      'ESS': 'settings'
    };
    return icons[name] || 'folder';
  }
}
