package com.homeschooler.rest.webservices.restful_web_services;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncodewrTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		for (int i =1; i<=10; i++) {
			String encodedString = encoder.encode("JimRitchhart$1");
			System.out.println(encodedString);
		}
		

	}

}
