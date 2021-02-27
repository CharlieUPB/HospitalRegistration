package com.devtest.HospitalRegistrationService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.devtest.HospitalRegistrationService.DomainModels.Hospital;
import com.devtest.HospitalRegistrationService.Repositories.HospitalRepository;

@Configuration
public class LoadDatabase {
	
	private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

	  @Bean
	  CommandLineRunner initDatabase(HospitalRepository repository) {

	    return args -> {
	      log.info("Preloading " + repository.save(new Hospital("Los Olivos", "Clinica Los Olivos, es un hospital de 2ndo nivel ubicado en Cochabamba")));
	      log.info("Preloading " + repository.save(new Hospital("Belga", "Clinica Belga, es un hospital prestigioso con mas de 20 años")));
	    };
	  }

}
