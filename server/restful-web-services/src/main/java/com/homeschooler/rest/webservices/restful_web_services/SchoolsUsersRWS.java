package com.homeschooler.rest.webservices.restful_web_services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.homeschooler.model.SchoolUsersHardCodedList;
import com.homeschooler.model.SchoolsUsers;
import com.homeschooler.services.SchoolsUsersService;

@ComponentScan({"com.homeschooler.services"})
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class SchoolsUsersRWS {

	@Autowired
	//private SchoolUsersHardCodedList  SUHCL ;
	private SchoolsUsersService SUS ;
	
	@GetMapping("/GetAllSchoolsByID/{schoolID}")
	public List<SchoolsUsers> getAllSchoolsUsersBySchoolID(@PathVariable int schoolID) {
		return SUS.GetAllSchoolsByID(schoolID);
		//return SUHCL.findAll();
	}
} 
