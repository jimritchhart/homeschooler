import { Component, OnInit } from '@angular/core';
import {ValidateUserLoginService } from '../services/validate-user-login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public isUserLoggedIn: Boolean;
  constructor(private ValidateUserLoginService: ValidateUserLoginService) { 
    this.isUserLoggedIn = this.ValidateUserLoginService.isUserLoggedIn();
  }

  ngOnInit() {   
    
   }
  
  

}
