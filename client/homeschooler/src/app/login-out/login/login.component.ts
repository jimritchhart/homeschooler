import { Component, OnInit, Injectable } from '@angular/core';
//import {ValidateUserLoginService} from '../../services/Not_Used_validate-user-login.service';
import {Router} from '@angular/router';
import { ViewChild, ElementRef} from '@angular/core';
import { BasicAuthenticationService } from 'src/app/services/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username = '';
  public password = ''; 
  public validUserMessage = '';
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;

  constructor( private router: Router, 
                //private ValidateUserLoginService: ValidateUserLoginService,
                private BasicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  jwtAuthValidateUser() {
    this.BasicAuthenticationService.executeJWTAuthenticationService(this.username, this.password) 
        .subscribe(
          data => {
            console.log(data)
            this.validUserMessage = '';
            this.closeAddExpenseModal.nativeElement.click();
            this.router.navigate(['welcome', this.username]);
            return true;
          },
          error => {
            console.log(error);
            this.validUserMessage = 'User / Password Combination not found';
          }  
        )
  }

  basicAuthValidateUser() {
    this.BasicAuthenticationService.executeAuthenticationService(this.username, this.password) 
        .subscribe(
          data => {
            console.log(data)
            this.validUserMessage = '';
            this.closeAddExpenseModal.nativeElement.click();
            this.router.navigate(['welcome', this.username]);
            return true;
          },
          error => {
            console.log(error);
            this.validUserMessage = 'User / Password Combination not found';
          }  
        )
  }
  

}
