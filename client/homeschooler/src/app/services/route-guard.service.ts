import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {ValidateUserLoginService } from './validate-user-login.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private ValidateUserLoginService: ValidateUserLoginService,
    private router: Router ) {

   }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if ( this.ValidateUserLoginService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;
  }

}
