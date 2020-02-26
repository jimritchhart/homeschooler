import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService { 

  constructor(private http:HttpClient) { }

 
  executeAuthenticationService(username, password) {

    //let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(
        `${API_URL}/basicauth`, {headers} )
        .pipe(
          map(
            data => {
              sessionStorage.setItem('authenticatedUser', username);
              sessionStorage.setItem('authenticationToken', basicAuthHeaderString);
              return data;
            }
          )
        );
  }


  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser')
  }
  
  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem('authenticationToken')
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user===null);
  }


  logout(){
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('authenticationToken');
  }
}

  export class AuthenticationBean{
      constructor(public message: string){}
  }
  