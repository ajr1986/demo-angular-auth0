import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot): boolean {
    
    if(this.auth.isAuthenticated()){
      console.log("Access allowed by guard");
      return true;
    } else {
      console.error("Access denied by guard");
      return false;
    }
  }
}
