import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        BrowserAnimationsModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should handle sidebar toggle', () => {
    expect(component.isSidebarOpen).toBeFalsy();
    component.toggleSidebar();
    expect(component.isSidebarOpen).toBeTruthy();
  });

  it('should handle nav item selection with subitems', () => {
    const testItem = {
      name: 'EMPDS',
      route: '/empds',
      subItems: [
        { name: 'Employee List', route: '/empds/list' }
      ]
    };
    
    component.onNavItemSelected(testItem);
    expect(component.selectedNavItem).toEqual(testItem);
    expect(component.isSidebarOpen).toBeTruthy();
  });

  it('should handle nav item selection without subitems', () => {
    const testItem = {
      name: 'Home',
      route: '/home'
    };
    
    component.onNavItemSelected(testItem);
    expect(component.selectedNavItem).toEqual(testItem);
    expect(component.isSidebarOpen).toBeFalsy();
  });

  it('should close sidebar on login page', () => {
    component.isSidebarOpen = true;
    component.isLoginPage = true;
    fixture.detectChanges();
    expect(component.isSidebarOpen).toBeFalsy();
  });
});
