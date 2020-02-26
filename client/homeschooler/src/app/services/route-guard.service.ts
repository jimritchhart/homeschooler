import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
//import {ValidateUserLoginService } from './Not_Used_validate-user-login.service';
import { BasicAuthenticationService } from 'src/app/services/basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(//private ValidateUserLoginService: ValidateUserLoginService,
    private BasicAuthenticationService: BasicAuthenticationService,
    private router: Router ) {

   }


  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if ( this.BasicAuthenticationService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;
  }


}
