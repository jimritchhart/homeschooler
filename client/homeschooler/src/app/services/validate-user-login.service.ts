import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidateUserLoginService {
  public emailField = '';
  public passwordField = '';
  public user = 'JRITCHHART';
  public password = 'JRITCHHART';

  constructor(private http:HttpClient) { }

   validateUserID(userid, password){
    //if ( userid == "jritchhart@gmail.com" && password == "samara11" ) {
    console.log(this.http.get('http://localhost:8090/isValidUser/${userid}/${password}'));
    if (this.http.get('http://localhost:8090/isValidUser/${userid}/${password}')) {
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
