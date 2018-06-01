import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServeService } from './shared/helpers/serve.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: ServeService, private router: Router) {}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.checkLogin();
  }
  
  checkLogin(): boolean {
    if (this.authService.isLoggedIn || this.authService.isLogin()) { 
      console.log(this.authService.isLogin());
      return true; 
    }

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
