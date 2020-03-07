package com.homeschooler.services;

import org.springframework.stereotype.Service;

import com.homeschooler.model.SchoolsJPA;


@Service
public class SchoolsServiceJPA {
	
	private SchoolsJPA schools;
	
	public SchoolsServiceJPA() {
		schools = new SchoolsJPA((long) 1, "Christian Life", "10700 75th Street", "", "KENOSHA", "WI",
				"53142");		
	}

	public SchoolsJPA GetSchoolData() {
		return this.schools;
	}
	
	public SchoolsJPA GetSchoolByID( int schoolID ) {
		return this.schools;
	}
	

}
