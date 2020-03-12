package com.homeschooler.model;

import java.util.ArrayList;
import java.util.List;

//import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class SchoolUsersHardCodedList {
	
	private static List<SchoolsUsers> SchoolsUsers = new ArrayList<SchoolsUsers>();
	private static int idCounter = 0;
	
	static {
		SchoolsUsers.add( new SchoolsUsers("jritchhart@comcast.net", ++idCounter ));
		SchoolsUsers.add( new SchoolsUsers("jritchhart@gmail.com", idCounter ));
		SchoolsUsers.add( new SchoolsUsers("jimritchhart@gmail.com", idCounter ));
		
	}
	
	public List<SchoolsUsers> findAll(){
		return SchoolsUsers;
	}

}
