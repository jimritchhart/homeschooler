package com.homeschooler.model;

public class Schools {
	private Integer schoolID;
	private String name;
	private String address1;
	private String address2;
	private String city;
	private String state;
	private String zipCode;
	public Schools(Integer schoolID, String name, String address1, String address2, String city, String state,
			String zipCode) {
		super();
		this.schoolID = schoolID;
		this.name = name;
		this.address1 = address1;
		this.address2 = address2;
		this.city = city;
		this.state = state;
		this.zipCode = zipCode;
	}
	
	public Schools() {
	}
	
	public Integer getSchoolID() {
		return schoolID;
	}
	public void setSchoolID(Integer schoolID) {
		this.schoolID = schoolID;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress1() {
		return address1;
	}
	public void setAddress1(String address1) {
		this.address1 = address1;
	}
	public String getAddress2() {
		return address2;
	}
	public void setAddress2(String address2) {
		this.address2 = address2;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getZipCode() {
		return zipCode;
	}
	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	
	
}
