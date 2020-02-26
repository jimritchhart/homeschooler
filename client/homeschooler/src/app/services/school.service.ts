import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Schools } from '../model/Schools';
import { API_URL } from '../app.constants';
import { BasicAuthenticationService } from "src/app/services/basic-authentication.service";


@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http:HttpClient
            , private BasicAuthenticationService: BasicAuthenticationService) { 

  }
  
  retrieveSchoolByID( schoolID ){
    console.log(schoolID);
      let basicAuthHeaderString = this.BasicAuthenticationService.getAuthenticatedToken();
      let username = this.BasicAuthenticationService.getAuthenticatedUser();

      let header = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })
      

      return this.http.get<Schools>(`${API_URL}/getSchool/${schoolID}`,
        {headers : header});
  }


}
