package com.alex.HoppersReceipt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HoppersReceiptApplication {

	public static void main(String[] args) {
		SpringApplication.run(HoppersReceiptApplication.class, args);
	}

}
