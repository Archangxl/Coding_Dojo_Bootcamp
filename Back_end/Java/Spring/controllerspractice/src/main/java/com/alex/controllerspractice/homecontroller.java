package com.alex.controllerspractice;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class homecontroller {
	
	@RequestMapping("")
    public String hello() {
            return "Hello World";
    }
	
	@RequestMapping("/world") 
	public String World() {
		return "World";
	}
}
