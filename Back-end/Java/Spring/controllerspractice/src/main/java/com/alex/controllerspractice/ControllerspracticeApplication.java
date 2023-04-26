package com.alex.controllerspractice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication

@RestController
public class ControllerspracticeApplication {

	public static void main(String[] args) {
		SpringApplication.run(ControllerspracticeApplication.class, args);
	}

}
