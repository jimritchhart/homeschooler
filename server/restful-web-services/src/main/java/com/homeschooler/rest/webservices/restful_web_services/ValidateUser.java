package com.homeschooler.rest.webservices.restful_web_services;

import com.homeschooler.model.User;
import com.homeschooler.services.UserService;

import java.io.Console;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ValidateUser {
	
	private UserService US = new UserService();
	
	//@Autowired
	@GetMapping("/isValidUser/{userid}/{password}")
	public boolean isValidUser(@PathVariable String userid, @PathVariable String password) {
		User user = US.GetUserData();
	    if ( userid.equals("jritchhart@gmail.com") && password.equals("samara11") ) {
	        return true;
	      }
		return false;
		
	}

}
