package com.homeschooler.services;

import org.springframework.stereotype.Service;

import com.homeschooler.model.User;

@Service
public class UserService {
	
	private User user;
	
	public UserService() {
		user = new User("jritchhart", "Jim", "Ritchhart", "CLS");		
	}

	public User GetUserData() {
		return this.user;
	}
	
}
