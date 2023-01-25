package com.alex.fruityLoops;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class FruityLoopsApplication {

	public static void main(String[] args) {
		SpringApplication.run(FruityLoopsApplication.class, args);
	}

}
