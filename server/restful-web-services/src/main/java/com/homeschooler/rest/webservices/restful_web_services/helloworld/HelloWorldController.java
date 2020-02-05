package com.homeschooler.rest.webservices.restful_web_services.helloworld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

// --server.port=8090

//Controller
@RestController
public class HelloWorldController {
		
	//Get 
	//URI - /hello-world
	//method - "Hello World"
	//@RequestMapping(method = RequestMethod.GET, path = "/hello-world")\
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello Worldsss";
	}

	
	//hello-world bean
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World bean");
	}
	
	
	//hello-world bean
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}
	
	
}
