import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../services/school.service';
import { Schools } from '../../model/Schools';

@Component({
  selector: 'app-setupschool',
  templateUrl: './setupschool.component.html',
  styleUrls: ['./setupschool.component.scss']
})
export class SetupschoolComponent implements OnInit {

  schools: Schools;

  constructor( private schoolService:SchoolService) { 

  }

  ngOnInit() { 
    this.schoolService.retrieveSchoolByID(1).subscribe(
      response=> {      
        console.log(response);
        this.schools = response;
      }
    )
  }

}
