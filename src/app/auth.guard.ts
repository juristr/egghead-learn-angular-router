import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
  Route,
  UrlSegment
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canEnterRouter();
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return this.canEnterRouter();
  }

  private canEnterRouter() {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
}
