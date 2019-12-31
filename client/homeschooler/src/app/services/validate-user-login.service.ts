import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateUserLoginService {
  public emailField = '';
  public passwordField = '';
  public user = 'JRITCHHART';
  public password = 'JRITCHHART';

  constructor() { }

   validateUserID(userid, password){
    if ( userid == "jritchhart@gmail.com" && password == "samara11" ) {
      sessionStorage.setItem('authenticatedUser', userid);
      return true;
    }
    return false;
    
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user===null);
  }
  
  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
