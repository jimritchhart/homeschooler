import { Component, OnInit } from '@angular/core';

import {BasicAuthenticationService } from '../services/basic-authentication.service';
import {LogoutComponent} from './logout/logout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-out',
  templateUrl: './login-out.component.html',
  styleUrls: ['./login-out.component.scss']
})
export class LoginOutComponent implements OnInit {

  constructor(private BasicAuthenticationService: BasicAuthenticationService,
              private LogoutComponent: LogoutComponent,
              private router: Router ) { 
    
  }

  ngOnInit() {
  }
    //isUserLoggedIn = this.ValidateUserLoginService.isUserLoggedIn();
  
  logout(){
    this.BasicAuthenticationService.logout() 
    this.router.navigate(['welcome']);    
  }
}
