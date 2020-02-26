import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import {BasicAuthenticationService } from '../../services/basic-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private BasicAuthenticationService: BasicAuthenticationService
            ,private router: Router ) { }

  ngOnInit() {
    //this.ValidateUserLoginService.logout();
  }

  logout() {
    this.BasicAuthenticationService.logout();
    this.router.navigate(['welcome']);
    return true;
  } 

}
