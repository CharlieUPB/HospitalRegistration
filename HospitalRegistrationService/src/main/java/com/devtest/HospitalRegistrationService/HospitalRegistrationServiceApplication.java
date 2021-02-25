package com.devtest.HospitalRegistrationService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class HospitalRegistrationServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(HospitalRegistrationServiceApplication.class, args);
	}

}
