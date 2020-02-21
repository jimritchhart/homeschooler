package com.homeschooler.rest.webservices.restful_web_services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.homeschooler.model.Schools;
import com.homeschooler.model.User;
import com.homeschooler.services.SchoolsService;

@CrossOrigin
@ComponentScan({"com.homeschooler.services"})
@RestController
public class SchoolsRWS {
	
	@Autowired
	private SchoolsService SS;

	
	@GetMapping("/getSchool/{schoolID}")
	public Schools getSchoolByID(@PathVariable int schoolID) {
		Schools school = SS.GetSchoolByID(schoolID);
		return school;
		
	}
	
}
