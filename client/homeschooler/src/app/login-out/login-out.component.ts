import { Component, OnInit } from '@angular/core';

import {ValidateUserLoginService } from '../services/validate-user-login.service';
import {LogoutComponent} from './logout/logout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-out',
  templateUrl: './login-out.component.html',
  styleUrls: ['./login-out.component.scss']
})
export class LoginOutComponent implements OnInit {

  constructor(private ValidateUserLoginService: ValidateUserLoginService,
              private LogoutComponent: LogoutComponent,
              private router: Router ) { 
    
  }

  ngOnInit() {
  }
    //isUserLoggedIn = this.ValidateUserLoginService.isUserLoggedIn();
  
  logout(){
    this.ValidateUserLoginService.logout() 
    this.router.navigate(['welcome']);    
  }
}
