import { Component , OnInit} from '@angular/core';
//import {ValidateUserLoginService} from './services/Not_Used_validate-user-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'homeschooler';
  //isUserLoggedIn: boolean = false;

  constructor(//private ValidateUserLoginService: ValidateUserLoginService
    ){

  }

  ngOnInit(): void {
    //this.isUserLoggedIn = this.ValidateUserLoginService.isUserLoggedIn()
  }
  
    
}
