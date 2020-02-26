import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Not_Used_ValidateUserLoginService { 

  constructor(private http:HttpClient) { }

   validateUserID(userid, password){

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
