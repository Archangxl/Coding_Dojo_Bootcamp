package com.alex.helloworld2;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// 2. Importing dependencies
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@SpringBootApplication
// 1. Annotation
@RestController
public class Helloworld2Application {

	public static void main(String[] args) {
		SpringApplication.run(Helloworld2Application.class, args);
	}
	
	@RequestMapping("/")
    // 3. Method that maps to the request route above
    public String hello() { // 3
            return "Hello World!";
    }
	
	@RequestMapping("/new_route")
	public String my() {
		return "It works";
	}

}
