package com.alex.burgerTracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class BurgerTrackerApplication {

	public static void main(String[] args) {
		SpringApplication.run(BurgerTrackerApplication.class, args);
	}

}
