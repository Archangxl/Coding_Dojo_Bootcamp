package com.alex.controllerspractice;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class homecontroller {
	
	@RequestMapping("")
    public String hello(@RequestParam(value="s", required=false) String searchQuery) {
            return "Hello World! You searched: " + searchQuery;
    }
	
	@RequestMapping("/world") 
	public String World() {
		return "World";
	}
}
