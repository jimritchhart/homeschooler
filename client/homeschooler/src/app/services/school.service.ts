import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
      return this.http.get<Schools>(`http://localhost:8090/getSchool/${schoolID}`);
  }

}
