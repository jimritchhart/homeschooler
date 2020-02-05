package com.homeschooler.model;

public class User {
	private String userID;
	private String first_name;
	private String last_name;
	private String code;
	
	
	public User(String userID, String first_name, String last_name, String code) {
		super();
		this.userID = userID;
		this.first_name = first_name;
		this.last_name = last_name;
		this.code = code;
	}
	
	
	
	public String getUserID() {
		return userID;
	}
	public void setUserID(String userID) {
		this.userID = userID;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
}
