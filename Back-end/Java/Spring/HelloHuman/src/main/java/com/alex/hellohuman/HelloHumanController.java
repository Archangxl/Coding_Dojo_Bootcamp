package com.alex.hellohuman;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController

@RequestMapping("/")
public class HelloHumanController {
	
	@GetMapping("")
	public String fnameAndLastName(@RequestParam(value="fname", required=false)String fname, @RequestParam(value="lname", required=false)String lname, @RequestParam(value="times", required=false)String times) {
		if (times == null) {
			if (lname == null) {
				if (fname==null) {
					return "Hello Human!";
				} else {
					return "Hello " + fname + "!";
				}
			} else {
				return "Hello " + fname +" "+ lname + "!";
			}
		} else {
			int multiply = Integer.parseInt(times);
			String string = "Hello " + fname +" "+ lname + "!";
			return string.repeat(multiply);
		} 
	}
}
