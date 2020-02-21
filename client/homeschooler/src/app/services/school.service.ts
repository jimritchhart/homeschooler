import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SetupschoolComponent } from '../gettingstarted/setupschool/setupschool.component';

import { Schools } from '../model/Schools'

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http:HttpClient) { 

  }

  
  retrieveSchoolByID( schoolID ){
    console.log(schoolID);
      let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

      let header = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })

      return this.http.get<Schools>(`http://localhost:8090/getSchool/${schoolID}`,
        {headers : header});
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'user'; 
    let passowrd = 'password';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + passowrd);
    return basicAuthHeaderString;
  }

}
