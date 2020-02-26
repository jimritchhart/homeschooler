package com.homeschooler.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


// --server.port=8090
@CrossOrigin(origins="http://localhost:4200")
//Controller
@RestController
public class BasicAuthenticationController {
		
	
	//hello-world bean
	@GetMapping(path = "/basicauth")
	public AuthenticationBean helloWorldBean() {
		return new AuthenticationBean("you are authenticated");
	}
	
	
}
