import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface NavItem {
  name: string;
  route: string;
  subItems?: NavItem[];
}

export interface NavigationState {
  feature: string | null;
  subItems: NavItem[];
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navigationState = new BehaviorSubject<NavigationState>({
    feature: null,
    subItems: []
  });

  featureSelected$ = this.navigationState.asObservable();

  updateFeature(feature: string, subItems: NavItem[]) {
    this.navigationState.next({ feature, subItems });
  }

  clearFeature() {
    this.navigationState.next({ feature: null, subItems: [] });
  }
}
