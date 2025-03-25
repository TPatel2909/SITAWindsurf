import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { NavigationService, NavItem } from '../../../core/services/navigation.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-empds',
  templateUrl: './empds.component.html',
  styleUrls: ['./empds.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ]
})
export class EmpdsComponent implements OnInit {
  currentRoute$: Observable<string>;
  private navItems: NavItem[] = [
    {
      name: 'Performance Agreement',
      route: '/empds/performance-agreement'
    },
    {
      name: 'Workplan Level 1-12',
      route: '/empds/workplan-1-12'
    },
    {
      name: 'Workplan Level 13-16',
      route: '/empds/workplan-13-16'
    },
    {
      name: 'Personal Development Plan',
      route: '/empds/personal-development-plan'
    }
  ];

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {
    this.currentRoute$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => (event as NavigationEnd).url)
    );
  }

  ngOnInit() {
    this.navigationService.updateFeature('EMPDS', this.navItems);
  }
}
