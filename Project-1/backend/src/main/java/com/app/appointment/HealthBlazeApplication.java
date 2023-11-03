package com.app.appointment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.app.appointment.*")

public class HealthBlazeApplication {

	public static void main(String[] args) {
		SpringApplication.run(HealthBlazeApplication.class, args);
	}

}
