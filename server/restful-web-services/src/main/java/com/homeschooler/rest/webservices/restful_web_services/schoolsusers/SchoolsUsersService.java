package com.homeschooler.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.homeschooler.model.SchoolUsersHardCodedList;
import com.homeschooler.model.SchoolsUsers;

@ComponentScan({"com.homeschooler.model"})
@Service
public class SchoolsUsersService {
	
	
	//-----------Remove when DB is added ------------
	@Autowired
	private SchoolUsersHardCodedList  SUHCL ;
	
	public List<SchoolsUsers>GetAllSchoolsByID (int schoolID) {
		return SUHCL.findAll();
		
	}

}
