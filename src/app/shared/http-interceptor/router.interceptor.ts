import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable()
export class RouteInterceptorService {
  private _previousUrl: string;
  private _currentUrl: string;
  private _routeHistory: string[];

  constructor(router: Router) {
    this._routeHistory = [];
    router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        this._setURLs(event);
      });
  }

  private _setURLs(event: NavigationStart): void {
    const tempUrl = this._currentUrl;
    this._previousUrl = tempUrl;
    this._currentUrl = location.pathname;
    this._routeHistory.push(location.pathname);
  }

  get previousUrl(): string {
    return this._previousUrl;
  }

  get currentUrl(): string {
    return this._currentUrl;
  }

  get routeHistory(): string[] {
    return this._routeHistory;
  }
}