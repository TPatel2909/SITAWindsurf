import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './core/header/header.component';
import { NavigationService, NavItem } from './core/services/navigation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HeaderComponent
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  isLoginPage = false;
  isSidebarOpen = false;
  currentFeature: string | null = null;
  currentNavItems: NavItem[] = [];
  private navigationSubscription: Subscription | null = null;

  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isLoginPage = this.router.url === '/login';
      if (this.isLoginPage) {
        this.isSidebarOpen = false;
      }
    });
  }

  ngOnInit() {
    this.isLoginPage = this.router.url === '/login';
    this.navigationSubscription = this.navigationService.featureSelected$.subscribe(
      ({ feature, subItems }) => {
        this.currentFeature = feature;
        this.currentNavItems = subItems;
        this.isSidebarOpen = true;
      }
    );
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  toggleSidebar() {
    if (!this.isLoginPage) {
      this.isSidebarOpen = !this.isSidebarOpen;
      if (!this.isSidebarOpen) {
        this.currentFeature = null;
        this.currentNavItems = [];
      }
    }
  }

  getFeatureIcon(feature: string): string {
    const icons: { [key: string]: string } = {
      'EMPDS': 'group',
      'IAPPMS': 'assessment',
      'Reporting': 'description',
      'ESS': 'settings'
    };
    return icons[feature] || 'folder';
  }

  trackItem(index: number, item: NavItem): string {
    return item.name;
  }

  onNavItemSelected(route: string) {
    this.router.navigate([route]);
    if (window.innerWidth <= 768) {
      this.isSidebarOpen = false;
    }
  }
}
