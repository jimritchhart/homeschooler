import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {ValidateUserLoginService} from '../../services/validate-user-login.service';
 
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  
  public validUser = '';
  public validUserMessage = '';
  public username = '';
  public password = '';

  constructor( private router: Router, private ValidateUserLoginService: ValidateUserLoginService) { 
  }

  ngOnInit() {
  }

  validateUser() {
    //console.log(this.username);
    //console.log(this.password);

    if(this.ValidateUserLoginService.validateUserID(this.username, this.password)) {
      this.validUserMessage = '';
      return true;
    } else
    this.validUserMessage = 'User / Password Combination not found';  
  }

}
