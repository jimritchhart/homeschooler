package com.homeschooler.rest.webservices.restful_web_services.basic.auth;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


// --server.port=8090

//Controller
@RestController
public class BasicAuthenticationController {
		
	
	//hello-world bean
	@GetMapping(path = "/basicauth")
	public AuthenticationBean helloWorldBean() {
		return new AuthenticationBean("you are authenticated");
	}
	
	
}
