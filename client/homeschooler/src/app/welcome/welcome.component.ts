import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from 'src/app/services/basic-authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public isUserLoggedIn: Boolean;
  constructor(private BasicAuthenticationService: BasicAuthenticationService) { 
    this.isUserLoggedIn = this.BasicAuthenticationService.isUserLoggedIn();
  }

  ngOnInit() {   
    
   }
  
  

}
