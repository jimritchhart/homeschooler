import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ViewChild, ElementRef} from '@angular/core';
import {BasicAuthenticationService} from '../../services/basic-authentication.service';
 
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
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;

  constructor( private router: Router, private BasicAuthenticationService: BasicAuthenticationService) { 
  }

  ngOnInit() {
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
