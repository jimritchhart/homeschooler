package com.homeschooler.services;

import org.springframework.stereotype.Service;

import com.homeschooler.model.Schools;
import com.homeschooler.model.User;

@Service
public class SchoolsService {
	
	private Schools schools;
	
	public SchoolsService() {
		schools = new Schools(1, "Christian Life", "10700 75th Street", "", "KENOSHA", "WI",
				"53142");		
	}

	public Schools GetSchoolData() {
		return this.schools;
	}
	
	public Schools GetSchoolByID( int schoolID ) {
		return this.schools;
	}
	

}
