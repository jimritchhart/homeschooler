package com.homeschooler.rest.webservices.restful_web_services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.homeschooler.model.SchoolsJPA;
import com.homeschooler.services.SchoolsServiceJPA;

@CrossOrigin
@ComponentScan({"com.homeschooler.services"})
@RestController
public class SchoolsRWSJPA {
	
	@Autowired
	private SchoolsServiceJPA SS;

	
	@GetMapping("/getSchoolJPA/{schoolID}")
	public SchoolsJPA getSchoolByID(@PathVariable int schoolID) {
		SchoolsJPA school = SS.GetSchoolByID(schoolID);
		return school;
		
	}
	
}
