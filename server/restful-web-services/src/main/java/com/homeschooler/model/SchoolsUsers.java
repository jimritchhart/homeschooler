package com.homeschooler.model;

public class SchoolsUsers {
	private String userID;
	private Integer schoolID;
	
	
	public SchoolsUsers(String userID, Integer schoolID) {
		super();
		this.userID = userID;
		this.schoolID = schoolID;
	}
	
	public SchoolsUsers(String userID) {
		super();
		this.userID = userID;
	}

	public SchoolsUsers(Integer schoolID) {
		super();
		this.schoolID = schoolID;
	}

	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	public Integer getSchoolID() {
		return schoolID;
	}

	public void setSchoolID(Integer schoolID) {
		this.schoolID = schoolID;
	}
	
	

}
