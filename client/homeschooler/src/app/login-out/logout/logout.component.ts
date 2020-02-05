import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import {ValidateUserLoginService } from '../../services/validate-user-login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private ValidateUserLoginService: ValidateUserLoginService
            ,private router: Router ) { }

  ngOnInit() {
    //this.ValidateUserLoginService.logout();
  }

  logout() {
    this.ValidateUserLoginService.logout();
    this.router.navigate(['welcome']);
    return true;
  } 

}
