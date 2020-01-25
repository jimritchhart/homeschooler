import { Component, OnInit, Injectable } from '@angular/core';
import {ValidateUserLoginService} from '../../services/validate-user-login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username = '';
  public password = '';
  public validUserMessage = '';

  constructor( private router: Router, private ValidateUserLoginService: ValidateUserLoginService) { }

  ngOnInit() {
  }

  validateUser() {
    if(this.ValidateUserLoginService.validateUserID(this.username, this.password)) {
      this.validUserMessage = '';
      console.log(this.username)
      this.router.navigate(['welcome']);
      return true;
    } else{
      this.validUserMessage = 'User / Password Combination not found';
    }
  }

}
