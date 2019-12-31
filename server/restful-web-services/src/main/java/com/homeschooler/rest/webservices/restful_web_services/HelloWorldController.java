package com.homeschooler.rest.webservices.restful_web_services;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

//Controller
@RestController
public class HelloWorldController {
		
	//Get 
	//URI - /hello-world
	//method - "Hello World"
	//@RequestMapping(method = RequestMethod.GET, path = "/hello-world")\
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}

	
	//hello-world bean
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World");
	}
	
	
	//hello-world bean
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}
	
	
}
