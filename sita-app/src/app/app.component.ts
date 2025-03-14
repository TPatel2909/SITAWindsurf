import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './core/header/header.component';

interface NavItem {
  name: string;
  route: string;
  subItems?: NavItem[];
}

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
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  
  isLoginPage = false;
  isSidebarOpen = false;
  selectedNavItem: NavItem | null = null;
  currentRoute = '';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isLoginPage = event.url === '/login';
      this.currentRoute = event.url;
      
      if (this.isLoginPage && this.sidenav?.opened) {
        this.sidenav.close();
        this.isSidebarOpen = false;
      }
    });
  }

  ngOnInit() {
    // Initialize any necessary data
  }

  toggleSidebar() {
    if (this.isLoginPage) return;
    
    this.isSidebarOpen = !this.isSidebarOpen;
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  onNavItemSelected(item: NavItem) {
    if (this.isLoginPage) return;

    this.selectedNavItem = item;
    if (item.subItems?.length) {
      this.isSidebarOpen = true;
      if (this.sidenav) {
        this.sidenav.open();
      }
    } else {
      this.router.navigate([item.route]);
      this.isSidebarOpen = false;
      if (this.sidenav) {
        this.sidenav.close();
      }
    }
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

  trackByName(_: number, item: NavItem): string {
    return item.name;
  }
}
