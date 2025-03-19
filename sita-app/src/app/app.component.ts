import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './core/header/header.component';

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
  isLoginPage = false;
  isSidebarOpen = false;

  constructor(private router: Router) {
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
  }

  toggleSidebar() {
    if (!this.isLoginPage) {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }

  onNavItemSelected(route: string) {
    this.router.navigate([route]);
    if (window.innerWidth <= 768) {
      this.isSidebarOpen = false;
    }
  }
}
