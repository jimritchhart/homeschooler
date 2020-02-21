import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
        'http://localhost:8090/basicauth', {headers} )
  }

/*     createBasicAuthenticationHttpHeader() {
        let username = 'jritchhart@comcast.net';
        let password = 'Samara11';
        let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
        return basicAuthHeaderString;
    } */

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user===null);
  }
  
  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}

  export class AuthenticationBean{
      constructor(public message: string){}
  }
  