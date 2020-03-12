package com.homeschooler.rest.webservices.restful_web_services;

import com.homeschooler.model.User;
import com.homeschooler.services.UserService;

import java.io.Console;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@ComponentScan
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ValidateUserRWS {
	
	
	@Autowired
	private UserService US ;
	
	@GetMapping("/isValidUser/{userid}/{password}")
	public boolean isValidUser(@PathVariable String userid, @PathVariable String password) {
		User user = US.GetUserData();
	    if ( userid.equals("user") && password.equals("password") ) {
	        return true;
	      }
		return false;
		
	}

}
