import { Component, OnInit } from '@angular/core';

import {ValidateUserLoginService } from '../services/validate-user-login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private ValidateUserLoginService: ValidateUserLoginService) { }

  ngOnInit() {
    //this.ValidateUserLoginService.logout();
  }

  logout() {
    this.ValidateUserLoginService.logout();
  }

}
